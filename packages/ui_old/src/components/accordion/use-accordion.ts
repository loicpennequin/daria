import { ACCORDION_INJECTION_KEY } from '@/constants';
import { useSafeInject } from '@/hooks';
import { AccordionContext } from './d-accordion.types';

export const useAccordion = () => {
  return useSafeInject<AccordionContext>(ACCORDION_INJECTION_KEY);
};
