export type DrawerPosition = 'left' | 'right';

export type DrawerContext = {
  close: () => void;
  open: () => void;
  toggle: () => void;
  position: DrawerPosition;
  isOpened: boolean;
};
