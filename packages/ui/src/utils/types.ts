import { Ref } from 'vue';

export type Nil = null | undefined;

export type Maybe<T> = T | null;

export type MaybeRef<T> = Ref<T> | T;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type CssVar = `var(--${string})`;

export type ResponsiveProp<T> = T | T[];

export type ColorScheme = {
  [key: string]: number | string;
};

export type Swatch = {
  [key: string | number]: string;
};

export type FontVariants = {
  [key: number]: string;
};

export type StyleProp = ResponsiveProp<string | number>;

export type Theme = {
  color: {
    red: Swatch;
    orange: Swatch;
    yellow: Swatch;
    lime: Swatch;
    green: Swatch;
    teal: Swatch;
    cyan: Swatch;
    blue: Swatch;
    indigo: Swatch;
    purple: Swatch;
    pink: Swatch;
    rose: Swatch;
    grey: Swatch;
    coldgrey: Swatch;
    warmgrey: Swatch;
    [key: string | number]: Swatch | string;
  };
  font: {
    body: FontVariants;
    heading: FontVariants;
    [key: string]: FontVariants;
  };
  fontSize: string[];
  spacing: {
    [key: string | number]: string;
  };
  fontWeight: {
    light: 300;
    normal: 400;
    semibold: 500;
    bold: 700;
  };
  shadow: {
    [key: string | number]: string;
  };
  breakpoint: {
    [key: string | number]: string;
  };
  radius: {
    [key: string | number]: string;
  };
  transition: {
    [key: string | number]: string;
  };
};

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch';
export type FlexWrap = 'wrap' | 'nowrap';

export type BaseStyleProps = {
  shadow?: StyleProp;
  fontFamily?: StyleProp;
  fontSize?: StyleProp;
  fontWeight?: StyleProp;
  margin?: StyleProp;
  m?: StyleProp;
  marginX?: StyleProp;
  mx?: StyleProp;
  marginY?: StyleProp;
  my?: StyleProp;
  marginTop?: StyleProp;
  mt?: StyleProp;
  marginBottom?: StyleProp;
  mb?: StyleProp;
  marginLeft?: StyleProp;
  ml?: StyleProp;
  marginRight?: StyleProp;
  mr?: StyleProp;
  padding?: StyleProp;
  p?: StyleProp;
  paddingX?: StyleProp;
  px?: StyleProp;
  paddingY?: StyleProp;
  py?: StyleProp;
  paddingTop?: StyleProp;
  pt?: StyleProp;
  paddingBottom?: StyleProp;
  pb?: StyleProp;
  paddingLeft?: StyleProp;
  pl?: StyleProp;
  paddingRight?: StyleProp;
  pr?: StyleProp;
  background?: StyleProp;
  bg?: StyleProp;
  color?: StyleProp;
  borderColor?: StyleProp;
  borderRadius?: StyleProp;
  transition?: ResponsiveProp<number | { [key: string]: number }>;
};

type StylePropsMapper<Prefix> = {
  [K in keyof BaseStyleProps as `${string & Prefix}${Capitalize<
    string & K
  >}`]: BaseStyleProps[K];
};

export type HoverShorthandStyleProps = StylePropsMapper<'h'>;
export type FocusShortHandStyleProps = StylePropsMapper<'f'>;
export type FocusVisibleShortHandStyleProps = StylePropsMapper<'fv'>;
export type HoverStyleProps = StylePropsMapper<'hover'>;
export type FocusStyleProps = StylePropsMapper<'focus'>;
export type FocusVisibleStyleProps = StylePropsMapper<'focusVisible'>;

export type StyleProps = BaseStyleProps &
  HoverStyleProps &
  HoverShorthandStyleProps &
  FocusStyleProps &
  FocusShortHandStyleProps &
  FocusVisibleStyleProps &
  FocusVisibleShortHandStyleProps;
