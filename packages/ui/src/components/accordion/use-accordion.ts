import { ACCORDION_INJECTION_KEY } from '@/constants';
import { ComputedRef, inject } from 'vue';
import { AccordionContext } from './d-accordion.types';

export const useAccordion = () => {
  const context = inject<ComputedRef<AccordionContext>>(
    ACCORDION_INJECTION_KEY
  );

  if (context === undefined) {
    throw new Error(
      'Your are trying to use useAccordionr outside of a d-drawer component.'
    );
  }

  return context;
};
