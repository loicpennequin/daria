import { camelToKebabCase } from '@/utils';
import { mapToCssVar } from '@/utils/css';
import { isObject } from 'lodash-es';
import { computed } from 'vue';
import { useResponsiveProp } from './useResponsiveProp';

type SpacingValues = {
  all: string | number;
  x: string | number;
  y: string | number;
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
};

export const useStyleProps = (props: any) => {
  const getPropValue = useResponsiveProp();

  const computeSpacing = (values: SpacingValues) => {
    const { all, x, y, top, bottom, left, right } = values;
    const topToken = mapToCssVar('spacing', getPropValue(top ?? y ?? all));
    const bottomToken = mapToCssVar(
      'spacing',
      getPropValue(bottom ?? y ?? all)
    );
    const leftToken = mapToCssVar('spacing', getPropValue(left ?? x ?? all));
    const rightToken = mapToCssVar('spacing', getPropValue(right ?? x ?? all));

    return `${topToken} ${rightToken} ${bottomToken} ${leftToken}`;
  };

  const computeTransitions = (
    value: string | number | { [key: string]: number | string }
  ) => {
    if (!isObject(value)) {
      return `all ${mapToCssVar('transition', value)}`;
    }

    return Object.entries(value).reduce(
      (acc, [property, themeValue], index) => {
        return `${acc}${index === 0 ? '' : ', '}${camelToKebabCase(
          property
        )} ${mapToCssVar('transition', themeValue)}`;
      },
      ''
    );
  };

  return computed(() => {
    return {
      shadow: mapToCssVar('shadow', getPropValue(props.shadow)),
      fontSize: mapToCssVar('font-size', getPropValue(props.fontSize)),
      fontWeight: mapToCssVar('font-weight', getPropValue(props.fontWeight)),
      fontFamily: mapToCssVar('font', getPropValue(props.fontFamily)),
      margin: computeSpacing({
        all: props.margin ?? props.m,
        x: props.marginX ?? props.mx,
        y: props.marginY ?? props.y,
        top: props.marginTop ?? props.mt,
        bottom: props.marginBottom ?? props.mb,
        left: props.marginLeft ?? props.ml,
        right: props.marginRight ?? props.mr
      }),
      padding: computeSpacing({
        all: props.padding ?? props.p,
        x: props.paddingX ?? props.px,
        y: props.paddingY ?? props.py,
        top: props.paddingTop ?? props.pt,
        bottom: props.paddingBottom ?? props.pb,
        left: props.paddingLeft ?? props.pl,
        right: props.paddingRight ?? props.pr
      }),
      bg: mapToCssVar('color', getPropValue(props.background || props.bg)),
      color: mapToCssVar('color', getPropValue(props.color)),
      borderColor: mapToCssVar('color', getPropValue(props.borderColor)),
      gap: mapToCssVar('spacing', getPropValue(props.gap)),
      borderRadius: mapToCssVar('radius', getPropValue(props.borderRadius)),
      transition: computeTransitions(getPropValue(props.transition))
    };
  });
};
