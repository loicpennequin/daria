import { system } from 'styled-system';
import { isObject, isNil, camelToKebabCase } from '@daria/utils';

export const styledSystem = system({
  gap: {
    property: 'gap',
    scale: 'space',
    defaultScale: [4, 8, 16, 32, 64, 128, 256, 512]
  },

  transform: {
    property: 'transform'
  },

  transition: {
    property: 'transition',
    scale: 'transitions',
    defaultScale: [0, '0,2s', '0.3s', '0.5s', '0.8s', '1s'],
    transform(value, scale) {
      if (isNil(value)) return null;
      if (!isObject(value)) {
        return `all ${scale?.[value] ?? value}`;
      }

      return Object.entries(value)
        .map(([k, v]) => `${camelToKebabCase(k)} ${scale?.[v] ?? v}`)
        .join(', ');
    }
  }
});
