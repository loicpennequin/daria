import chroma from 'chroma-js';
import { Swatch } from './types';

export const createLinearScale = (baseValue: number, count: number): number[] =>
  new Array(count + 1).fill(undefined).map((_, i) => baseValue * i);

export const createFibonacciScale = (
  baseValue: number,
  count: number
): number[] => {
  const scale: number[] = [];
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      scale.push(baseValue);
    } else if (i === 1) {
      scale.push(baseValue + scale[0]);
    } else {
      scale.push(scale[i - 1] + scale[i - 2]);
    }
  }

  return scale;
};

export const createExponentialScale = (
  baseValue: number,
  options: { ratio: number; from: number; to: number }
) => {
  const scale = [];
  for (let i = options.from; i < options.to; i++) {
    scale.push(baseValue * Math.pow(options.ratio, i));
  }

  return scale;
};

const getContrastPassingColor = (): number => {
  const blackMinLuminance = 4.5 * (chroma('black').luminance() + 0.05);
  const whiteMinLuminance = (chroma('white').luminance() + 0.05) / 4.5;

  return (blackMinLuminance + whiteMinLuminance) / 2 - 0.05;
};

export const createColorScale = ({
  baseColor,
  hueShift = 0,
  minLightness = 0.2,
  maxLightness = 0.95,
  saturationAdjust = 0,
  lightnessAdjust = 0
}: {
  baseColor: string;
  minLightness?: number;
  maxLightness?: number;
  hueShift?: number;
  saturationAdjust?: number;
  lightnessAdjust?: number;
}): Swatch => {
  const middleColor = chroma(baseColor).luminance(getContrastPassingColor());

  const lightestColor = chroma(middleColor)
    .set('hsl.h', `-${hueShift / 2}`)
    .set('hsl.l', maxLightness);

  const darkestColor = chroma(middleColor)
    .set('hsl.h', `+${hueShift / 2}`)
    .set('hsl.l', minLightness);

  const scale = chroma
    .scale([lightestColor, middleColor, darkestColor])
    .colors(11)
    .map(hex =>
      chroma(hex)
        .set('hsl.s', `${saturationAdjust >= 0 ? '+' : ''}${saturationAdjust}`)
        .set('hsl.l', `${lightnessAdjust >= 0 ? '+' : ''}${lightnessAdjust}`)
        .hex()
    );

  return Object.fromEntries(Object.entries(scale));
};

function addUnit(val: number, unit: string): string;
function addUnit(val: number[], unit: string): string[];
function addUnit(val: number | number[], unit: string) {
  if (Array.isArray(val)) {
    return val.map(v => `${v}${unit}`);
  }
  return `${val}${unit}`;
}

export const toPixels = (val: number[]) => addUnit(val, 'px');
export const toEms = (val: number[]) => addUnit(val, 'em');
export const toRems = (val: number[]) => addUnit(val, 'rem');
export const toSeconds = (val: number[]) => addUnit(val, 's');
export const toMilliSeconds = (val: number[]) => addUnit(val, 'ms');
