import { camelToKebabCase, isNil, upperCaseFirstLetter } from '@/utils';
import { mapToCssVar } from '@/utils/css';
import { initial, isObject } from 'lodash-es';
import { computed, unref } from 'vue';
import { useResponsiveProp } from './use-responsive-prop';

export const useStyleProps = (props: any) => {
  const getPropValue = useResponsiveProp();

  const computeSpacing = (prefix: string, shorthandPrefix: string) => {
    const _props = unref(props);
    const values = {
      all: _props[prefix] ?? _props[shorthandPrefix],
      x: _props[`${prefix}X`] ?? _props[`${shorthandPrefix}x`],
      y: _props[`${prefix}Y`] ?? _props[`${shorthandPrefix}y`],
      top: _props[`${prefix}Top`] ?? _props[`${shorthandPrefix}t`],
      bottom: _props[`${prefix}Bottom`] ?? _props[`${shorthandPrefix}b`],
      left: _props[`${prefix}Left`] ?? _props[`${shorthandPrefix}l`],
      right: _props[`${prefix}Right`] ?? _props[`${shorthandPrefix}r`]
    };
    if (Object.values(values).every(isNil)) return null;

    const { all, x, y, top, bottom, left, right } = values;

    const topToken = mapToCssVar('spacing', getPropValue(top ?? y ?? all)) ?? 0;
    const bottomToken =
      mapToCssVar('spacing', getPropValue(bottom ?? y ?? all)) ?? 0;
    const leftToken =
      mapToCssVar('spacing', getPropValue(left ?? x ?? all)) ?? 0;
    const rightToken =
      mapToCssVar('spacing', getPropValue(right ?? x ?? all)) ?? 0;

    return `${topToken} ${rightToken} ${bottomToken} ${leftToken}`;
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

  const getStyleProp = (
    cssVarName: string,
    stylePropName: string,
    propName: string = stylePropName,
    shorthandPropName: string = propName
  ) => {
    const _props = unref(props);
    const uStylePropName = upperCaseFirstLetter(stylePropName);
    const uPropName = upperCaseFirstLetter(propName);
    const uShorthandPropName = upperCaseFirstLetter(shorthandPropName);

    return {
      [stylePropName]: mapToCssVar(
        cssVarName,
        getPropValue(_props[propName] ?? _props[shorthandPropName])
      ),
      [`h${uStylePropName}`]: mapToCssVar(
        cssVarName,
        getPropValue(
          _props[`hover${uPropName}`] ??
            props[`h${uPropName}`] ??
            _props[`hover${uShorthandPropName}`] ??
            props[`h${uShorthandPropName}`]
        )
      ),
      [`f${uStylePropName}`]: mapToCssVar(
        cssVarName,
        getPropValue(
          _props[`focus${uPropName}`] ??
            props[`f${uPropName}`] ??
            _props[`focus${uShorthandPropName}`] ??
            props[`f${uShorthandPropName}`]
        )
      ),
      [`fv${uStylePropName}`]: mapToCssVar(
        cssVarName,
        getPropValue(
          _props[`focusVisible${uPropName}`] ??
            props[`fv${uPropName}`] ??
            _props[`focusVisible${uShorthandPropName}`] ??
            props[`fv${uShorthandPropName}`]
        )
      )
    };
  };

  const getSpacingStyleProp = (
    stylePropName: string,
    prefix: string,
    shorthandPrefix: string
  ) => {
    const uStylePropName = upperCaseFirstLetter(stylePropName);
    const uPrefix = upperCaseFirstLetter(prefix);
    const uShorthandPrefix = upperCaseFirstLetter(shorthandPrefix);

    return {
      [stylePropName]: computeSpacing(prefix, shorthandPrefix),

      [`h${uStylePropName}`]: computeSpacing(
        `hover${uPrefix}`,
        `h${uShorthandPrefix}`
      ),
      [`f${uStylePropName}`]: computeSpacing(
        `focus${uPrefix}`,
        `f${uShorthandPrefix}`
      ),
      [`fv${uStylePropName}`]: computeSpacing(
        `focusVisible${uPrefix}`,
        `fv${uShorthandPrefix}`
      )
    };
  };

  const getStyleProps = () => {
    const _props = unref(props);

    return {
      ...getStyleProp('shadow', 'shadow', 'shadow'),
      ...getStyleProp('font-size', 'fontSize'),
      ...getStyleProp('font-weight', 'fontWeight'),
      ...getStyleProp('font', 'fontFamily'),
      ...getStyleProp('color', 'bg', 'background', 'bg'),
      ...getStyleProp('color', 'color'),
      ...getStyleProp('color', 'borderColor'),
      ...getStyleProp('spacing', 'gap'),
      ...getStyleProp('radius', 'borderRadius'),
      ...getSpacingStyleProp('margin', 'margin', 'm'),
      ...getSpacingStyleProp('padding', 'padding', 'p'),
      transition: computeTransitions(getPropValue(_props.transition)),
      hTransition: computeTransitions(
        getPropValue(_props.hoverTransition ?? _props.hTransition)
      ),
      fTransition: computeTransitions(
        getPropValue(_props.focusTransition ?? _props.fTransition)
      ),
      fvTransition: computeTransitions(
        getPropValue(_props.focusVisibleTransition ?? _props.fvTransition)
      )
    };
  };

  return computed<any>(getStyleProps);
};
