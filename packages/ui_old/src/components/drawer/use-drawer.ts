import { DRAWER_INJECTION_KEY } from '@/constants';
import { useSafeInject } from '@/hooks';
import { DrawerContext } from './d-drawer.types';

export const useDrawer = () => {
  return useSafeInject<DrawerContext>(DRAWER_INJECTION_KEY);
};
