export type ColorScheme = Record<string, number | string>;

export type Swatch = Record<string | number, string>;

export type BreakpointArray = string[] & Record<string, string>;

export type StyleProp = string | number | string[] | number[];

export type StylePropDefault =
  | string
  | number
  | (() => string[])
  | (() => number[]);
