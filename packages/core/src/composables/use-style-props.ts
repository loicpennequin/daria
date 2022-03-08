import { computed, unref } from 'vue';
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
import { useTheme } from '@daria/theme';
import { MaybeRef } from '@daria/utils';
import { omitBy } from 'lodash-es';
import { isNil, isString } from '@daria/utils';

const customAliases = {
  h: 'height',
  w: 'width',
  minH: 'minHeight',
  maxH: 'maxHeight',
  minW: 'minWidth',
  maxW: 'maxWidth',
  shadow: 'boxShadow',
  bdr: 'borderRadius',
  bdrTopLeft: 'borderTopLeftRadius',
  bdrTopRight: 'borderTopRightRadius',
  bdrBottomLeft: 'borderBottomLeftRadius',
  bdrBottomRight: 'borderBottomRightRadius'
};

const gap = system({
  gap: {
    property: 'gap',
    scale: 'space',
    defaultScale: [4, 8, 16, 32, 64, 128, 256, 512]
  }
});

type Props = Record<string, unknown>;
type StyleProps = Props & {
  hover?: Props;
  focus?: Props;
  focusVisible?: Props;
};
export const useStyleProps = (props: MaybeRef<StyleProps>) => {
  const theme = useTheme();

  const normalizedProps = computed<any>(() => {
    const _props = unref(props);

    const normalize = (obj: Record<string, any>) =>
      omitBy(
        {
          ...obj,
          ...Object.fromEntries(
            Object.entries(customAliases).map(([alias, property]) => [
              property,
              obj[property] ?? obj[alias]
            ])
          )
        },
        isNil
      );

    return {
      ...normalize(_props),
      hover: normalize(_props.hover ?? {}),
      focus: normalize(_props.focus ?? {}),
      focusVisible: normalize(_props.focusVisible ?? {})
    };
  });

  const getStyleObject = (props: Record<string, any>) => {
    const styleObject = compose(
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

    // handle negative style props values mapping to a css variable
    Object.entries(styleObject).forEach(([key, value]) => {
      if (!isString(value)) return;

      if (value.startsWith('-var(')) {
        styleObject[key] = value.replace('-var', 'calc(-1 * var') + ')';
      }
    });

    return Object.keys(styleObject).length === 0 ? null : styleObject;
  };

  return computed(() =>
    omitBy(
      {
        ...getStyleObject(normalizedProps.value),
        '@media(hover: hover)': {
          '&:hover': getStyleObject(normalizedProps.value.hover)
        },
        '&:focus': getStyleObject(normalizedProps.value.focus),
        '&:focus-visible, &.focus-visible': getStyleObject(
          normalizedProps.value.focusVisible
        )
      },
      isNil
    )
  );
};
