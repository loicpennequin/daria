import { computed, unref } from 'vue';
import { intersection } from 'lodash-es';
import {
  space,
  color,
  typography,
  layout,
  flex,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  system
} from 'styled-system';
import { useTheme } from '@/theme/use-theme';
import { MaybeRef } from '@/utils';

const customAliases = {
  h: 'height',
  w: 'width',
  minH: 'minHeight',
  maxH: 'maxHeight',
  minW: 'minWidth',
  maxW: 'maxWidth'
};

const gap = system({
  gap: {
    property: 'gap',
    scale: 'space',
    defaultScale: [4, 8, 16, 32, 64, 128, 256, 512]
  }
});

export const useStyleProps = (props: MaybeRef<Record<string, unknown>>) => {
  const theme = useTheme();

  const normalizedProps = computed<any>(() => {
    const _props = unref(props);

    return {
      ..._props,
      ...Object.fromEntries(
        Object.entries(customAliases).map(([alias, property]) => [
          property,
          _props[property] ?? _props[alias]
        ])
      )
    };
  });

  const getStyleObject = (props: Record<string, any>) =>
    compose(
      space,
      color,
      typography,
      layout,
      flex,
      grid,
      background,
      border,
      position,
      shadow,
      gap
    )({ ...props, theme });

  return computed(() => ({
    ...getStyleObject(normalizedProps.value),
    '&:hover': getStyleObject(normalizedProps.value.hover),
    '&:focus': getStyleObject(normalizedProps.value.focus),
    '&:focus-visible, &.focus-visible': getStyleObject(
      normalizedProps.value.focusVisible
    )
  }));
};
