'use server';

export interface LeadMagnetFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
  };
}

const emailRegex = /^[\w.!#$%&'*+/=?`{|}~-]+@[\w-]+(?:\.[\w-]+)+$/u;

export function submitLeadMagnet(
  _prevState: LeadMagnetFormState | undefined,
  formData: FormData,
): LeadMagnetFormState {
  const name = String(formData.get('name')?.valueOf ?? '').trim();
  const email = String(formData.get('email')?.valueOf ?? '').trim();

  const errors: LeadMagnetFormState['errors'] = {};

  if (!name) {
    errors.name = 'Please share your name.';
  }

  if (!email) {
    errors.email = 'An email address is required.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (errors.name || errors.email) {
    return {
      success: false,
      message: 'Please fix the highlighted fields.',
      errors,
    };
  }

  // Placeholder for CRM/API integration
  console.info('Lead magnet submission', { name, email });

  return {
    success: true,
    message: 'Check your inbox for your $50 discount code!',
  };
}
