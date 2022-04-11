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

  outline: {
    property: 'outline'
  },

  outlineStyle: {
    property: 'outlineStyle'
  },

  outlineWidth: {
    property: 'outlineWidth'
  },

  outlineColor: {
    property: 'outlineColor',
    scale: 'colors'
  },

  outlineOffset: {
    property: 'outlineOffset'
  },

  transition: {
    property: 'transition',
    scale: 'transitions',
    defaultScale: [0, '0,2s', '0.3s', '0.5s', '0.8s', '1s'],
    // @ts-ignore
    transform(_: never, scale: any, props: any) {
      // We use the props argument otherwise the value gets unwrapped and we get a string instead of the full transitions object
      const value = props.transition;

      if (isNil(value)) return null;
      if (!isObject(value)) {
        return `all ${scale?.[value] ?? value}`;
      }

      return Object.entries(value)
        .map(([k, v]) => `${camelToKebabCase(k)} ${scale?.[v] ?? v}`)
        .join(', ');
    }
  },

  transitionTimingFunction: {
    property: 'transitionTimingFunction'
  }
});
