import { FORM_CONTROL_INJECTION_KEY } from './constants';
import { useSafeInject } from '@daria/utils';
import { FormControlContext } from './d-form-control.types';

export const useFormControl = () => {
  return useSafeInject<FormControlContext>(FORM_CONTROL_INJECTION_KEY);
};
