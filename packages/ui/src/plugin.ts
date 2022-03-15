import 'focus-visible/dist/focus-visible';
import 'inert-polyfill';
import './styles/index.css';

import { App, Plugin } from 'vue';
import { themePlugin } from '@daria/theme';
import { PluginOptions } from './types';

export const DARIA_UI_INJECTION_KEY = Symbol('dariaUI');
export const createDariaUi = ({
  theme = {},
  components = {},
  icons = {},
  config = {}
}: PluginOptions = {}): Plugin => {
  return {
    install: (app: App) => {
      themePlugin(app, { theme, icons, config });
      app.provide(DARIA_UI_INJECTION_KEY, {
        getAppRootElement: () => {
          return app._container;
        }
      });
    }
  };
};
