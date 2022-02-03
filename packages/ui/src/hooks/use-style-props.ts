import { camelToKebabCase, isNil } from '@/utils';
import { mapToCssVar } from '@/utils/css';
import { isObject } from 'lodash-es';
import { computed, unref } from 'vue';
import { useResponsiveProp } from './use-responsive-prop';

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
    if (Object.values(values).every(isNil)) return null;

    const { all, x, y, top, bottom, left, right } = values;

    const topToken = mapToCssVar('spacing', getPropValue(top ?? y ?? all));
    const bottomToken = mapToCssVar(
      'spacing',
      getPropValue(bottom ?? y ?? all)
    );
    const leftToken = mapToCssVar('spacing', getPropValue(left ?? x ?? all));
    const rightToken = mapToCssVar('spacing', getPropValue(right ?? x ?? all));

    return `${topToken ?? 0} ${rightToken ?? 0} ${bottomToken ?? 0} ${
      leftToken ?? 0
    }`;
  };

  const computeTransitions = (
    value: string | number | { [key: string]: number | string }
  ) => {
    if (isNil(value)) return null;

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
    const _props = unref(props);

    return {
      shadow: mapToCssVar('shadow', getPropValue(_props.shadow)),
      fontSize: mapToCssVar('font-size', getPropValue(_props.fontSize)),
      fontWeight: mapToCssVar('font-weight', getPropValue(_props.fontWeight)),
      fontFamily: mapToCssVar('font', getPropValue(_props.fontFamily)),
      margin: computeSpacing({
        all: _props.margin ?? _props.m,
        x: _props.marginX ?? _props.mx,
        y: _props.marginY ?? _props.y,
        top: _props.marginTop ?? _props.mt,
        bottom: _props.marginBottom ?? _props.mb,
        left: _props.marginLeft ?? _props.ml,
        right: _props.marginRight ?? _props.mr
      }),
      padding: computeSpacing({
        all: _props.padding ?? _props.p,
        x: _props.paddingX ?? _props.px,
        y: _props.paddingY ?? _props.py,
        top: _props.paddingTop ?? _props.pt,
        bottom: _props.paddingBottom ?? _props.pb,
        left: _props.paddingLeft ?? _props.pl,
        right: _props.paddingRight ?? _props.pr
      }),
      bg: mapToCssVar('color', getPropValue(_props.background || _props.bg)),
      color: mapToCssVar('color', getPropValue(_props.color)),
      borderColor: mapToCssVar('color', getPropValue(_props.borderColor)),
      gap: mapToCssVar('spacing', getPropValue(_props.gap)),
      borderRadius: mapToCssVar('radius', getPropValue(_props.borderRadius)),
      transition: computeTransitions(getPropValue(_props.transition))
    };
  });
};
