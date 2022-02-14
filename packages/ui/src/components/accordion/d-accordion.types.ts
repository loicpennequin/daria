import { Maybe, ResponsiveProp } from '@/utils';

export type AccordionOpenedIndex = Maybe<number | number[]>;

export type AccordionContext = {
  openedIndex: AccordionOpenedIndex;
  open: (index: number) => void;
  close: (index: number) => void;
  toggle: (index: number) => void;
  isOpened: (index: number) => boolean;
  register: () => number;
  colorScheme?: ResponsiveProp<string>;
};
