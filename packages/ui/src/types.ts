import { Theme } from 'styled-system';
import { DeepPartial } from '@daria/utils';

export type PluginOptions = {
  theme?: DeepPartial<Theme>;
  icons?: Record<string, any>;
  components?: Record<string, any>;
  config?: Record<string, any>;
};
