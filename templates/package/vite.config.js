import baseViteConfig from '../../vite.config.base';
import { merge } from 'lodash';

export default merge(baseViteConfig, {
  build: {
    lib: {
      name: 'DariaUI__package__(pascalCase)'
    }
  }
});
