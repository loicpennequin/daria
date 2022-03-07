import { computed, unref } from 'vue';
import { css } from '@emotion/css';
import { isObject } from 'lodash-es';
import { camelToKebabCase, isNil, upperCaseFirstLetter } from '@/utils';
import { mapToCssVar } from '@/utils/css';
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
    cssPropertyName: string,
    propName: string = cssPropertyName,
    shorthandPropName: string = propName
  ) => {
    const _props = unref(props);
    const uPropName = upperCaseFirstLetter(propName);
    const uShorthandPropName = upperCaseFirstLetter(shorthandPropName);

    return {
      [cssPropertyName]: mapToCssVar(
        cssVarName,
        getPropValue(_props[propName] ?? _props[shorthandPropName])
      ),
      '&:hover': {
        [cssPropertyName]: mapToCssVar(
          cssVarName,
          getPropValue(
            _props[`hover${uPropName}`] ??
              props[`h${uPropName}`] ??
              _props[`hover${uShorthandPropName}`] ??
              props[`h${uShorthandPropName}`]
          )
        )
      },
      '&:focus': {
        [cssPropertyName]: mapToCssVar(
          cssVarName,
          getPropValue(
            _props[`focus${uPropName}`] ??
              props[`f${uPropName}`] ??
              _props[`focus${uShorthandPropName}`] ??
              props[`f${uShorthandPropName}`]
          )
        )
      },
      '&:focus-visible': {
        [cssPropertyName]: mapToCssVar(
          cssVarName,
          getPropValue(
            _props[`focusVisible${uPropName}`] ??
              props[`fv${uPropName}`] ??
              _props[`focusVisible${uShorthandPropName}`] ??
              props[`fv${uShorthandPropName}`]
          )
        )
      }
    };
  };

  const getSpacingStyleProp = (
    cssPropertyName: string,
    prefix: string,
    shorthandPrefix: string
  ) => {
    const uPrefix = upperCaseFirstLetter(prefix);
    const uShorthandPrefix = upperCaseFirstLetter(shorthandPrefix);

    return {
      [cssPropertyName]: computeSpacing(prefix, shorthandPrefix),
      '&:hover': {
        [cssPropertyName]: computeSpacing(
          `hover${uPrefix}`,
          `h${uShorthandPrefix}`
        )
      },
      '&:focus': {
        [cssPropertyName]: computeSpacing(
          `focus${uPrefix}`,
          `f${uShorthandPrefix}`
        )
      },
      '&:focus-visible': {
        [cssPropertyName]: computeSpacing(
          `focusVisible${uPrefix}`,
          `fv${uShorthandPrefix}`
        )
      }
    };
  };

  const getStyleProps = () => {
    const _props = unref(props);

    return [
      getStyleProp('shadow', 'boxShadow', 'shadow'),
      getStyleProp('font-size', 'fontSize', 'fontSize'),
      getStyleProp('font-weight', 'fontWeight'),
      getStyleProp('font', 'fontFamily', 'fontFamily'),
      getStyleProp('color', 'backgroundColor', 'background', 'bg'),
      getStyleProp('color', 'color'),
      getStyleProp('color', 'borderColor', 'borderColor'),
      getStyleProp('spacing', 'gap', 'gap'),
      getStyleProp('radius', 'borderRadius', 'borderRadius'),
      getSpacingStyleProp('margin', 'margin', 'm'),
      getSpacingStyleProp('padding', 'padding', 'p'),
      {
        transition: computeTransitions(getPropValue(_props.transition)),
        '&:hover': {
          transition: getPropValue(_props.hoverTransition ?? _props.hTransition)
        },
        '&:focus': {
          transition: getPropValue(_props.focusTransition ?? _props.fTransition)
        },
        '&:focus-visible': {
          transition: getPropValue(
            _props.focusVisibleTransition ?? _props.fvTransition
          )
        }
      }
    ];
  };

  return computed<any>(() => {
    const styleObject = getStyleProps() as any;
    console.log(styleObject);
    return css(styleObject);
  });
};
