import { computed, unref } from 'vue';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  variant as styledVariant
} from 'styled-system';
import { useTheme } from '@daria/theme';
import { mapObject, MaybeRef } from '@daria/utils';
import { omitBy } from 'lodash-es';
import { isNil, isString } from '@daria/utils';
import { styledSystem } from '../constants/styled-system';

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

type Props = Record<string, unknown>;
type StyleProps = Props & {
  hover?: Props;
  focus?: Props;
  focusVisible?: Props;
  focusWithin?: Props;
};

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

export const useStyleProps = (props: MaybeRef<StyleProps>) => {
  const theme = useTheme();

  const normalizedProps = computed<any>(() => {
    const _props = unref(props);

    return {
      ...normalize(_props),
      hover: Object.assign(normalize(_props.hover ?? {}), {
        variant: _props.variant
      }),
      focus: Object.assign(normalize(_props.focus ?? {}), {
        variant: _props.variant
      }),
      focusVisible: Object.assign(normalize(_props.focusVisible ?? {}), {
        variant: _props.variant
      }),
      focusWithin: Object.assign(normalize(_props.focusWithin ?? {}), {
        variant: _props.variant
      })
    };
  });

  const normalizedVariants = computed(() => {
    const _props = unref<any>(props);

    const extract = (key: string) =>
      mapObject(_props.variants, value => value[key]);

    return {
      ...normalize(_props.variants),
      hover: normalize(extract('hover')),
      focus: normalize(extract('focus')),
      focusVisible: normalize(extract('focusVisible')),
      focusWithin: normalize(extract('focusWithin'))
    };
  });

  const getStyleObject = (
    { variant, ...props }: Record<string, any>,
    variants = {}
  ) => {
    // internally, styled-system will create the style object by looping through the props in their order
    // we want to apply the variant first so it can be overriden with other props
    const allProps = { variant, ...props, theme };

    const styleObject = compose(
      styledVariant({ variants }),
      space,
      color,
      typography,
      layout,
      flexbox,
      grid,
      background,
      border,
      position,
      shadow,
      styledSystem
    )(allProps);

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
        ...getStyleObject(normalizedProps.value, normalizedVariants.value),
        '@media(hover: hover)': {
          '&:hover:not(:disabled)': getStyleObject(
            normalizedProps.value.hover,
            normalizedVariants.value.hover
          )
        },
        '&:focus': getStyleObject(
          normalizedProps.value.focus,
          normalizedVariants.value.focus
        ),
        '&:focus-within': getStyleObject(
          normalizedProps.value.focusWithin,
          normalizedVariants.value.focusWithin
        ),
        '&:focus-visible, &.focus-visible': getStyleObject(
          normalizedProps.value.focusVisible,
          normalizedVariants.value.focusVisible
        )
      },
      isNil
    )
  );
};
