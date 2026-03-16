'use client';

import type { FC, SubmitEventHandler } from 'react';
import { useId, useReducer } from 'react';

import type { State } from './state';
import { defaultState, reducer } from './state';

const action = 'https://leads.qccareerschool.com';

interface Props {
  listId?: number;
  emailTemplateId?: number;
  buttonText: string;
  successMessage: string;
  disclaimer?: string;
}

export const Form: FC<Props> = ({ buttonText, disclaimer }) => {
  const id = useId();
  const [ state, dispatch ] = useReducer(reducer, defaultState);

  const handleSubmit: SubmitEventHandler = e => {
    e.preventDefault();
    if (state.formState === 'submitting') {
      return;
    }
    dispatch({ type: 'SUBMIT' });
  };

  return (
    <form action={action} onSubmit={handleSubmit}>
      <Message {...state} />
      <div className="mb-2">
        {/* <label htmlFor={`${id}firstName`} className="form-label">Name</label> */}
        <input id={`${id}firstName`} name="firstName" type="text" className={`form-control form-control-lg ${state.errors?.firstName ? 'is-invalid' : ''}`} placeholder="Name" required />
        {state.errors?.firstName && <div className="invalid-feedback">{state.errors.firstName}</div>}
      </div>
      <div className="mb-2">
        {/* <label htmlFor={`${id}emailAddress`} className="form-label">Email Address</label> */}
        <input id={`${id}emailAddress`} name="emailAddress" type="email" className={`form-control form-control-lg ${state.errors?.emailAddress ? 'is-invalid' : ''}`} placeholder="you@example.com" required />
        {state.errors?.emailAddress && <div className="invalid-feedback">{state.errors.emailAddress}</div>}
      </div>
      <div className="my-3">
        <button type="submit" className="btn btn-primary w-100" disabled={state.formState === 'submitting'}>
          {state.formState === 'submitting' ? 'Sending…' : buttonText}
        </button>
      </div>
      <p className="small text-muted mb-0">{disclaimer ?? 'I agree to receive emails from Paw Parent Academy including promotions and grooming tips. Unsubscribe anytime.'}</p>
    </form>
  );
};

const Message: FC<State> = state => {
  if (state.formState === 'error') {
    return <div className="alert alert-warning" role="status">{state.message}</div>;
  }
  if (state.formState === 'success') {
    return <div className="alert alert-warning" role="status">{state.message}</div>;
  }
};
