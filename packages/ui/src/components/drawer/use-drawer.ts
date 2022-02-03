import { DRAWER_INJECTION_KEY } from '@/constants';
import { ComputedRef, inject } from 'vue';
import { DrawerContext } from './d-drawer.types';

export const useDrawer = () => {
  const context = inject<ComputedRef<DrawerContext>>(DRAWER_INJECTION_KEY);

  if (context === undefined) {
    throw new Error(
      'Your are trying to use useDrawer outside of a d-drawer component.'
    );
  }

  return context;
};
