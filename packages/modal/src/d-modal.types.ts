import { Ref } from 'vue';

export type ModalContext = {
  close: () => void;
  open: () => void;
  toggle: () => void;
  isOpened: Ref<boolean>;
};
