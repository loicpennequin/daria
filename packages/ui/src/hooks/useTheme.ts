import { inject } from 'vue';
import { THEME_SERVICE } from '@/constants';
import { ThemeService } from '@/theme';

export const useTheme = () => {
  const themeService = inject<ThemeService>(THEME_SERVICE);

  if (!themeService) {
    throw new Error();
  }

  return themeService.theme;
};
