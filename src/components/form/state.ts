type FormState = 'idle' | 'submitting' | 'error' | 'success';

export interface State {
  formState: FormState;
  values: {
    name: string;
    emailAddress: string;
    optIn: boolean;
  };
  errors?: {
    firstName: string | null;
    emailAddress: string | null;
  };
  message?: string;
}

export const defaultState: State = {
  formState: 'idle',
  values: {
    name: '',
    emailAddress: '',
    optIn: false,
  },
};

type Action =
| { type: 'SUBMIT' }
| { type: 'RESET' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SUBMIT':
      return state;
    case 'RESET':
      return state;
  }
};
