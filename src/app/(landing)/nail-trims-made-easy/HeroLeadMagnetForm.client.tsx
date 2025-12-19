'use client';

import Image, { type StaticImageData } from 'next/image';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import styles from './HeroSection.module.scss';
import { type LeadMagnetFormState, submitLeadMagnet } from '@/app/actions/leadMagnet';

export interface HeroLeadMagnetCopy {
  eyebrow?: string;
  heading: string;
  headingStrikeText?: string;
  highlightLabel?: string;
  description?: string;
  disclaimer?: string;
  submitLabel?: string;
  successMessage?: string;
  formImage: StaticImageData;
  formImageAlt: string;
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

export default function HeroLeadMagnetForm({ copy }: { copy: HeroLeadMagnetCopy }) {
  const [ state, formAction ] = useActionState(submitLeadMagnet, initialState);
  const buttonLabel = copy.submitLabel ?? 'Get Access';
  const alertMessage = state.success ? copy.successMessage ?? state.message : state.message;

  return (
    <div className={styles.formCard}>
      <div className={styles.formImageWrap}>
        <Image src={copy.formImage} alt={copy.formImageAlt} priority className={styles.formImage} />
      </div>
      {copy.eyebrow && <p className="subtitle-teal text-uppercase mb-2">{copy.eyebrow}</p>}
      <h3 className="h4 fw-semibold mb-2">
        {copy.heading}
        {copy.headingStrikeText && <span className={styles.priceStrike}> {copy.headingStrikeText}</span>}
        {copy.highlightLabel && <span className={styles.freeText}> {copy.highlightLabel}</span>}
      </h3>
      {copy.description && <p className="text-muted mb-4">{copy.description}</p>}

      <form action={formAction} noValidate className="d-grid gap-3">
        {state.message && (
          <div className={`alert ${state.success ? 'alert-success' : 'alert-warning'} mb-0`} role="status">
            {alertMessage}
          </div>
        )}
        <div>
          <label htmlFor="hero-lead-name" className="form-label fw-semibold">
            Name
          </label>
          <input
            id="hero-lead-name"
            name="name"
            type="text"
            className={`form-control form-control-lg ${styles.input} ${state.errors?.name ? 'is-invalid' : ''}`}
            placeholder="Name"
            required
          />
          {state.errors?.name && <div className="invalid-feedback">{state.errors.name}</div>}
        </div>
        <div>
          <label htmlFor="hero-lead-email" className="form-label fw-semibold">
            Email
          </label>
          <input
            id="hero-lead-email"
            name="email"
            type="email"
            className={`form-control form-control-lg ${styles.input} ${state.errors?.email ? 'is-invalid' : ''}`}
            placeholder="you@example.com"
            required
          />
          {state.errors?.email && <div className="invalid-feedback">{state.errors.email}</div>}
        </div>
        <SubmitButton label={buttonLabel} />
        {copy.disclaimer && <p className="small text-muted mb-0">{copy.disclaimer}</p>}
      </form>
    </div>
  );
}
