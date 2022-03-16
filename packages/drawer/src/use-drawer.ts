import { DRAWER_INJECTION_KEY } from './constants';
import { useSafeInject } from '@daria/utils';
import { DrawerContext } from './types';
import { useModal } from '@daria/modal';

export const useDrawer = () => {
  return {
    ...useModal(),
    ...useSafeInject<DrawerContext>(DRAWER_INJECTION_KEY)
  };
};
