import 'focus-visible/dist/focus-visible';
import 'inert-polyfill';
import '@/assets/styles/index.css';

import { App, Plugin } from 'vue';
import { THEME_INJECTION_KEY, ICONS_INJECTION_KEY } from './theme/constants';
import { Theme } from 'styled-system';
import { DeepPartial } from './utils';
import { merge } from 'lodash-es';
import { defaultTheme } from '@/theme/default-theme';
import { ThemeService } from './theme';
// import { ThemeService } from './theme';
// import { camelToKebabCase, lowerCaseFirstLetter } from './utils';

import * as dariaIcons from './assets/icons';

type PluginOptions = {
  theme?: DeepPartial<Theme>;
  icons?: Record<string, any>;
  components?: Record<string, any>;
  config?: Record<string, any>;
};

export const createDariaUi = ({
  theme = {},
  components = {},
  icons = {},
  config = {}
}: PluginOptions = {}): Plugin => {
  return {
    install: (app: App) => {
      const themeService = new ThemeService(merge(defaultTheme, theme), config);
      themeService.init();
      app.provide(THEME_INJECTION_KEY, themeService.theme);
      app.provide<Record<string, any>>(ICONS_INJECTION_KEY, {
        ...dariaIcons,
        ...icons
      });

      // Object.entries(components).map(async ([name, component]) => {
      //   app.component(camelToKebabCase(lowerCaseFirstLetter(name)), component);
      // });
    }
  };
};
