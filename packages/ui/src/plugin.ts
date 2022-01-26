import 'focus-visible/dist/focus-visible';
import 'inert-polyfill';
import '@/styles/index.css';

import { App, Plugin } from 'vue';
import { THEME_SERVICE, ICONS_INJECTION_KEY } from './constants';
import { ThemeService } from './theme';
import { camelToKebabCase } from './utils';
import * as components from './components';
import * as dariaIcons from './assets/icons';

type PluginOptions = {
  theme?: any;
  icons?: Record<string, any>;
  registerComponents?: boolean;
};

export const createDariaUi = ({
  theme = {},
  registerComponents = true,
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
      if (!registerComponents) return;

      Object.entries(components).map(async ([name, component]) => {
        app.component(camelToKebabCase(name), component);
      });
    }
  };
};
