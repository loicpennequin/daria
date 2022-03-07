import { useSafeInject } from '@daria/utils';
import { THEME_INJECTION_KEY } from './constants';

export const useTheme = () => useSafeInject<any>(THEME_INJECTION_KEY);
