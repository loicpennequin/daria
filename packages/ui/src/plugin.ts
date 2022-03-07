import 'focus-visible/dist/focus-visible';
import 'inert-polyfill';
import './styles/index.css';

import { App, Plugin } from 'vue';
import { themePlugin } from '@daria/theme';
import { PluginOptions } from './types';

export const createDariaUi = ({
  theme = {},
  components = {},
  icons = {},
  config = {}
}: PluginOptions = {}): Plugin => {
  return {
    install: (app: App) => {
      themePlugin(app, { theme, icons, config });
    }
  };
};
