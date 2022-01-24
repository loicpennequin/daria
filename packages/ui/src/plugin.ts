import 'focus-visible/dist/focus-visible';
import 'inert-polyfill';
import '@/styles/index.css';

import { App, Component, Plugin } from 'vue';
import { THEME_SERVICE } from './constants';
import { ThemeService } from './theme';
import { camelToKebabCase } from './utils';
import * as components from './components';

type PluginOptions = {
  theme?: any;
  registerComponents?: boolean;
};

export const createDariaUi = ({
  theme = {},
  registerComponents = true
}: PluginOptions = {}): Plugin => {
  return {
    install: (app: App) => {
      const themeService = new ThemeService(theme);
      themeService.init();

      app.provide<ThemeService>(THEME_SERVICE, themeService);
      if (!registerComponents) return;

      Object.entries(components).map(async ([name, component]) => {
        app.component(camelToKebabCase(name), component);
      });
    }
  };
};
