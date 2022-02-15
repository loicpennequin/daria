import { Maybe, ResponsiveProp } from '@/utils';
import { Ref } from 'vue';

export type AccordionOpenedIndex = Maybe<number | number[]>;

export type AccordionContext = {
  openedIndex: Ref<AccordionOpenedIndex>;
  colorScheme?: Ref<string>;
  open: (index: number) => void;
  close: (index: number) => void;
  toggle: (index: number) => void;
  isOpened: (index: number) => boolean;
  register: () => number;
};
