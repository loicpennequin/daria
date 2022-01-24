export type Nil = null | undefined;

export type Maybe<T> = T | null;

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
};
