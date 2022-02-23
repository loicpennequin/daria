import {
  createColorScale,
  toEms,
  toRems,
  createExponentialScale,
  arrayToObject,
  BreakpointArray
} from '../utils';

const breakpoints: BreakpointArray = ['30em', '48em', '62em', '80em', '96em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

export const defaultTheme = {
  colors: {
    transparent: 'transparent',
    black: 'black',
    white: 'white',
    red: createColorScale({
      baseColor: 'hsl(0,100%,50%)',
      maxLightness: 0.96,
      minLightness: 0.16,
      saturationAdjust: -0.2
    }),
    orange: createColorScale({
      baseColor: 'hsl(30,100%,50%)',
      minLightness: 0.15,
      saturationAdjust: 0.03,
      lightnessAdjust: 0.05
    }),
    yellow: createColorScale({
      baseColor: 'hsl(50,100%,50%)',
      minLightness: 0.12,
      lightnessAdjust: 0.05,
      saturationAdjust: 0.5
    }),
    lime: createColorScale({
      baseColor: 'hsl(75,100%,50%)',
      minLightness: 0.1,
      saturationAdjust: 0.5
    }),
    green: createColorScale({
      baseColor: 'hsl(120,100%,50%)',
      minLightness: 0.12
    }),
    teal: createColorScale({
      baseColor: 'hsl(155,100%,50%)',
      minLightness: 0.12
    }),
    cyan: createColorScale({
      baseColor: 'hsl(190,100%,50%)',
      minLightness: 0.1
    }),
    blue: createColorScale({
      baseColor: 'hsl(220,100%,50%)',
      minLightness: 0.15
    }),
    indigo: createColorScale({
      baseColor: 'hsl(245,100%,50%)',
      minLightness: 0.22,
      saturationAdjust: 0.1
    }),
    purple: createColorScale({
      baseColor: 'hsl(280,100%,50%)',
      minLightness: 0.18
    }),
    pink: createColorScale({
      baseColor: 'hsl(310,100%,50%)',
      minLightness: 0.12
    }),
    rose: createColorScale({
      baseColor: 'hsl(330,100%,50%)',
      minLightness: 0.12
    }),
    grey: createColorScale({
      baseColor: 'hsl(0,0%,50%)',
      maxLightness: 0.96,
      lightnessAdjust: 0.08,
      minLightness: 0
    }),
    coldgrey: createColorScale({
      baseColor: 'hsl(210,8%,50%)',
      minLightness: 0.1,
      maxLightness: 0.98
    }),
    warmgrey: createColorScale({
      baseColor: 'hsl(25,8%,50%)',
      minLightness: 0.1,
      maxLightness: 0.98
    })
  },
  space: {
    auto: 'auto',
    ...arrayToObject([
      '0',
      ...toRems(createExponentialScale(1, { from: -3, to: 7, ratio: 2 }))
    ])
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  fontSizes: toEms(createExponentialScale(1, { from: -3, to: 11, ratio: 1.2 })),
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 700
  },
  shadows: {
    0: 'none',
    1: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    2: '0 2px 6px 1px rgba(0, 0, 0, 0.2)',
    3: '0 2px 9px 1px rgba(0, 0, 0, 0.23)',
    4: '0 4px 16px 1px rgba(0, 0, 0, 0.25)',
    5: '0 5px 24px 1px rgba(0, 0, 0, 0.28)'
  },
  breakpoints: ['30em', '48em', '62em', '80em', '96em'],
  radii: {
    0: '0',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.375rem',
    4: '0.5rem',
    5: '0.75rem',
    6: '1rem',
    circle: '50%',
    pill: '9999px'
  },
  borders: ['none', 'solid 1px', 'solid 2px', 'solid 4px', 'solid 8px'],
  transitions: {
    0: '0',
    1: '0.2s',
    2: '0.3s',
    3: '0.5s',
    4: '0.8s',
    5: '1s'
  }
};
