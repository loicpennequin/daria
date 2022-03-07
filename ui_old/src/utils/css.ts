import chroma from 'chroma-js';
import { AA_COMPLIANCE_RATIO } from '@/constants/a11y';
import { CSS_VAR_PREFIX } from '@/constants/css';
import { Maybe, CssVar, Nil } from './types';
import { isNil } from './assertions';
import { TRANSPARENT_VALUES } from '@/constants';

export const mapToCssVar = (
  kind: string,
  value: string | number | Nil
): Maybe<CssVar> => (isNil(value) ? null : `var(--d-${kind}-${value})`);

const rootStyle = document.documentElement.style;

const isCssVar = (string: string): string is CssVar =>
  string.startsWith('--') || string.startsWith('var(--');

const getCssVarValue = (cssVar: CssVar): string => {
  const normalizedValue = cssVar.replace('var(', '').replace(')', '');
  const value = rootStyle.getPropertyValue(normalizedValue);

  return isCssVar(value) ? getCssVarValue(value) : value;
};

export const getReadableColor = (color: string) => {
  const dark: CssVar = `var(${CSS_VAR_PREFIX}color-grey-10)`;
  const light: CssVar = `var(${CSS_VAR_PREFIX}color-grey-0)`;
  const bg = isCssVar(color) ? getCssVarValue(color) : color;

  if (!bg || TRANSPARENT_VALUES.includes(bg)) return dark;

  return chroma.contrast(bg, getCssVarValue(light)) > AA_COMPLIANCE_RATIO
    ? light
    : dark;
};

export const getBreakpoints = (...breakpoints: string[]): string[] => {
  const rootStyle = window.getComputedStyle(document.documentElement);

  return breakpoints.map(bp =>
    rootStyle.getPropertyValue(`${CSS_VAR_PREFIX}breakpoint-${bp}`)
  );
};
