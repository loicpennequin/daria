import { DRAWER_INJECTION_KEY } from './constants';
import { useSafeInject } from '@daria/utils';
import { DrawerContext } from './types';

export const useDrawer = () => {
  return useSafeInject<DrawerContext>(DRAWER_INJECTION_KEY);
};
