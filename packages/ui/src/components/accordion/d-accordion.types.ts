import { Maybe } from '@/utils';

export type AccordionOpenedIndex = Maybe<number | number[]>;

export type AccordionContext = {
  openedIndex: AccordionOpenedIndex;
  open: (itemId: number) => void;
  close: (itemId: number) => void;
  register: () => number;
};
