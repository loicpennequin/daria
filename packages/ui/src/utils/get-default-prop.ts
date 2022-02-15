import { inject } from 'vue';
import { ThemeService } from '@/theme';
import { THEME_SERVICE } from '@/constants/injection-keys';
import { get } from 'lodash-es';

export const getDefaultProp = (propPath: string) => () => {
  const themeService = inject<ThemeService>(THEME_SERVICE);

  return get(themeService?.config, propPath);
};
