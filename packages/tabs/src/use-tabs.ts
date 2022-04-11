import { TABS_INJECTION_KEY } from './constants';
import { useSafeInject } from '@daria/utils';
import { TabsContext } from './types';

export const useTabs = () => {
  return useSafeInject<TabsContext>(TABS_INJECTION_KEY);
};
