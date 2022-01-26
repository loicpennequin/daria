import {
  createColorScale,
  toEms,
  createFibonacciScale,
  createExponentialScale,
  Theme,
  arrayToObject
} from '../utils';
import Roboto from '@/assets/fonts/Roboto-Regular.ttf';
import RobotoSemiBold from '@/assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '@/assets/fonts/Roboto-Bold.ttf';
import RobotoLight from '@/assets/fonts/Roboto-Light.ttf';
import { CSS_VAR_PREFIX } from '@/constants';

export const defaultTheme: Theme = {
  font: {
    body: {
      300: RobotoLight,
      400: Roboto,
      500: RobotoSemiBold,
      700: RobotoBold
    },
    heading: {
      300: RobotoLight,
      400: Roboto,
      500: RobotoSemiBold,
      700: RobotoBold
    }
  },
  color: {
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
      minLightness: 0,
      maxLightness: 1
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
    }),
    disabled: {
      background: `var(${CSS_VAR_PREFIX}color-grey-3)`,
      text: `var(${CSS_VAR_PREFIX}color-grey-7)`
    }
  },
  spacing: {
    auto: 'auto',
    ...arrayToObject(['0', ...toEms(createFibonacciScale(0.25, 10))])
  },
  fontSize: toEms(createExponentialScale(1, { from: -3, to: 11, ratio: 1.2 })),
  fontWeight: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 700
  },
  shadow: {
    0: 'none',
    1: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    2: '0 2px 6px 1px rgba(0, 0, 0, 0.2)',
    3: '0 2px 9px 1px rgba(0, 0, 0, 0.23)',
    4: '0 4px 16px 1px rgba(0, 0, 0, 0.25)',
    5: '0 5px 24px 1px rgba(0, 0, 0, 0.28)'
  },
  breakpoint: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    xxl: '96em'
  },
  radius: {
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
  transition: {
    0: '0',
    1: '0.2s',
    2: '0.3s',
    3: '0.5s',
    4: '0.8s',
    5: '1s'
  }
};
