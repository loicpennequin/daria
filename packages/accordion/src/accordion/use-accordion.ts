import { ACCORDION_INJECTION_KEY } from '../constants';
import { useSafeInject } from '@daria/utils';
import { AccordionContext } from '../types';

export const useAccordion = () => {
  return useSafeInject<AccordionContext>(ACCORDION_INJECTION_KEY);
};
