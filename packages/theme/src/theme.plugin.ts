import { App } from 'vue';
import { THEME_INJECTION_KEY, ICONS_INJECTION_KEY } from './constants';
import { Theme } from 'styled-system';
import { DeepPartial } from '@daria/utils';
import { merge } from 'lodash-es';
import { ThemeService } from './theme.service';
import { defaultTheme } from './defaults/theme';
import * as dariaIcons from './assets/icons';

type PluginOptions = {
  theme?: DeepPartial<Theme>;
  icons?: Record<string, any>;
  config?: Record<string, any>;
};

export const themePlugin = (
  app: App,
  { theme = {}, icons = {}, config = {} }: PluginOptions = {}
) => {
  const themeService = new ThemeService(merge(defaultTheme, theme), config);
  themeService.init();
  app.provide(THEME_INJECTION_KEY, themeService.theme);
  app.provide<Record<string, any>>(ICONS_INJECTION_KEY, {
    ...dariaIcons,
    ...icons
  });
};
