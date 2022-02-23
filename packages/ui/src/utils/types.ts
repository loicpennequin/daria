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

export type ColorScheme = Record<string, number | string>;

export type Swatch = Record<string | number, string>;

export type FontVariants = Record<number, string>;

export type StyleProp = ResponsiveProp<string | number>;

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

export interface BreakpointArray<T = any> extends Array<T> {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

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
