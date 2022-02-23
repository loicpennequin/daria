import { Ref } from 'vue';

export type DrawerPosition = 'left' | 'right';

export type DrawerContext = {
  close: () => void;
  open: () => void;
  toggle: () => void;
  position: Ref<DrawerPosition>;
  isOpened: Ref<boolean>;
};
