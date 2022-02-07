import 'focus-visible/dist/focus-visible';
import 'inert-polyfill';
import '@/styles/index.css';

import { App, Plugin } from 'vue';
import { THEME_SERVICE, ICONS_INJECTION_KEY } from './constants';
import { ThemeService } from './theme';
import { camelToKebabCase, lowerCaseFirstLetter } from './utils';

import * as dariaIcons from './assets/icons';

type PluginOptions = {
  theme?: any;
  icons?: Record<string, any>;
  components?: Record<string, any>;
};

export const createDariaUi = ({
  theme = {},
  components = {},
  icons = {}
}: PluginOptions = {}): Plugin => {
  return {
    install: (app: App) => {
      const themeService = new ThemeService(theme);
      themeService.init();

      app.provide<ThemeService>(THEME_SERVICE, themeService);
      app.provide<Record<string, any>>(ICONS_INJECTION_KEY, {
        ...dariaIcons,
        ...icons
      });

      Object.entries(components).map(async ([name, component]) => {
        app.component(camelToKebabCase(lowerCaseFirstLetter(name)), component);
      });
    }
  };
};
