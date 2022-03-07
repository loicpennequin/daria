import { useSafeInject } from '@daria/utils';
import { ICONS_INJECTION_KEY } from '../constants';

export const useIcons = (key?: string) => {
  const theme = useSafeInject<any>(ICONS_INJECTION_KEY);

  return key ? theme[key] : theme;
};
