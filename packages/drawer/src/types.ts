import { Ref } from 'vue';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

export type DrawerContext = {
  position: Ref<DrawerPosition>;
};
