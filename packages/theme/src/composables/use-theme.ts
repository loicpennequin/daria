import { useSafeInject } from '@daria/utils';
import { THEME_INJECTION_KEY } from '../constants';

export const useTheme = (key?: string) => {
  const theme = useSafeInject<any>(THEME_INJECTION_KEY);

  return key ? theme[key] : theme;
};
