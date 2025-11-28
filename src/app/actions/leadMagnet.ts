'use server';

export interface LeadMagnetFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
  };
}

const emailRegex = /^[\w.!#$%&'*+/=?`{|}~-]+@[\w-]+(?:\.[\w-]+)+$/;

export async function submitLeadMagnet(
  _prevState: LeadMagnetFormState | undefined,
  formData: FormData,
): Promise<LeadMagnetFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();

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
