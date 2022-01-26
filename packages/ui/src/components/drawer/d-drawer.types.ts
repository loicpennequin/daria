import { Ref } from 'vue';

export type DrawerDirection = 'left' | 'right';

export type DrawerContext = Ref<{
  close: () => void;
  direction: DrawerDirection;
  isOpened: boolean;
}>;
