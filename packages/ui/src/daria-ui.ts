import { createDariaUi } from './plugin';
import accordionPlugin from '@daria/accordion/plugin';
import buttonPlugin from '@daria/button/plugin';
import corePlugin from '@daria/core/plugin';
import drawerPlugin from '@daria/drawer/plugin';
import formControlPlugin from '@daria/form-control/plugin';
import iconPlugin from '@daria/input/plugin';
import layoutPlugin from '@daria/layout/plugin';
import modalPlugin from '@daria/modal/plugin';
import radioPlugin from '@daria/radio/plugin';
import sectionPlugin from '@daria/section/plugin';
import tabsPlugin from '@daria/tabs/plugin';
import transitionPlugin from '@daria/transitions/plugin';
import { PluginOptions } from './types';
import { Plugin } from 'vue';

export default function (options: PluginOptions): Plugin {
  return {
    install(app) {
      createDariaUi(options).install?.(app);
      accordionPlugin.install(app);
      buttonPlugin.install(app);
      corePlugin.install(app);
      drawerPlugin.install(app);
      formControlPlugin.install(app);
      iconPlugin.install(app);
      layoutPlugin.install(app);
      modalPlugin.install(app);
      radioPlugin.install(app);
      sectionPlugin.install(app);
      tabsPlugin.install(app);
      transitionPlugin.install(app);
    }
  };
}
