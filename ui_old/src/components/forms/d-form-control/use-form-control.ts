import { ComputedRef, inject } from 'vue';
import { FORM_CONTROL_INJECTION_KEY } from '@/constants';
import { useSafeInject } from '@/hooks';
import { FormControlContext } from './d-form-control.types';

export const useFormControl = () => {
  return useSafeInject<FormControlContext>(FORM_CONTROL_INJECTION_KEY);
};
