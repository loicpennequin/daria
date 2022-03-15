import { useSafeInject } from '@daria/utils';
import { ACCORDION_ITEM_INJECTION_KEY } from '../constants';
import { AccordionItemContext } from '../types';

export const useAccordionToggle = () => {
  return useSafeInject<AccordionItemContext>(ACCORDION_ITEM_INJECTION_KEY);
};
