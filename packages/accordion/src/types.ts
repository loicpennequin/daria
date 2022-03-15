import { Maybe } from '@daria/utils';
import { Ref, ComputedRef } from 'vue';

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

export type AccordionItemContext = {
  index: number;
  contentHeight: string;
  isOpened: ComputedRef<boolean>;
  colorScheme: Ref<string>;
  open: () => void;
  close: () => void;
  toggle: () => void;
};
