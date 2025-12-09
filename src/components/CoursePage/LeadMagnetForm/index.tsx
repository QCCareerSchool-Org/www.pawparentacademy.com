'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitLeadMagnet, type LeadMagnetFormState } from '@/app/actions/leadMagnet';
import styles from './styles.module.scss';

interface LeadMagnetFormProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  disclaimer?: string;
  submitLabel?: string;
  successMessage?: string;
}

const initialState: LeadMagnetFormState = {
  success: false,
  message: '',
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-pill-pink w-100" disabled={pending}>
      {pending ? 'Sending…' : label}
    </button>
  );
}

export default function LeadMagnetForm({
  eyebrow,
  heading,
  description,
  disclaimer,
  submitLabel,
  successMessage,
}: LeadMagnetFormProps) {
  const [state, formAction] = useActionState(submitLeadMagnet, initialState);
  const buttonLabel = submitLabel ?? 'Yes! I want $50 off!';
  const alertMessage = state.success ? successMessage ?? state.message : state.message;

  return (
    <section className={styles.wrapper}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className={styles.card}>
              {eyebrow && <h3>{eyebrow}</h3>}
              <h4 className='subtitle-teal'>{heading}</h4>
              {description && <p className="text-muted mb-4">{description}</p>}

              <form action={formAction} noValidate className="d-grid gap-3">
                {state.message && (
                  <div className={`alert ${state.success ? 'alert-success' : 'alert-warning'} mb-0`} role="status">
                    {alertMessage}
                  </div>
                )}
                <div>
                  <label htmlFor="lead-name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    className={`form-control form-control-lg ${styles.input} ${state.errors?.name ? 'is-invalid' : ''}`}
                    placeholder="Name"
                    required
                  />
                  {state.errors?.name && <div className="invalid-feedback">{state.errors.name}</div>}
                </div>
                <div>
                  <label htmlFor="lead-email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    className={`form-control form-control-lg ${styles.input} ${state.errors?.email ? 'is-invalid' : ''}`}
                    placeholder="you@example.com"
                    required
                  />
                  {state.errors?.email && <div className="invalid-feedback">{state.errors.email}</div>}
                </div>
                <SubmitButton label={buttonLabel} />
                {disclaimer && <p className="small text-muted mb-0">{disclaimer}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
