import { Ref } from 'vue';

export type ModalContext = {
  title: Ref<string | undefined>;
  colorScheme: Ref<string>;
  isOpened: Ref<boolean>;
  isScrollInside: Ref<boolean>;
  close: () => void;
  open: () => void;
  toggle: () => void;
};
