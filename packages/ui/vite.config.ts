import baseViteConfig from '../../vite.config.base';
import { merge } from 'lodash';
import { join, parse, resolve } from 'path';

export default function ({ mode }) {
  return merge(baseViteConfig, {
    build: {
      lib: {
        name: 'DariaUI'
      }
    }
  });
}
