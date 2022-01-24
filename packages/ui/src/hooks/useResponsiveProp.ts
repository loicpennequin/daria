import { mapToCssVar } from '@/utils/css';
import { isArray, isNil, upperCaseFirstLetter } from '@/utils';
import { computed } from 'vue';
import { useBreakpoints } from './useBreakpoints';
import { useTheme } from './useTheme';

type SpacingValues = {
  all: string | number;
  x: string | number;
  y: string | number;
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
};

export const useResponsiveProp = () => {
  const breakpoints = useBreakpoints();
  const theme = useTheme();

  return <T = any>(val: unknown, { isBoolean = false } = {}): T => {
    const bpKeys = Object.keys(theme.breakpoint);

    if (isArray(val)) {
      return val.reduce((acc, current, index) => {
        const bp = bpKeys[index];
        const key = `above${upperCaseFirstLetter(bp)}`;

        if (isNil(breakpoints[key])) return acc;
        return breakpoints[key] ? current : acc;
      }, val[0]);
    }

    if (isBoolean && val === '') return true as unknown as T;

    return val as T;
  };
};
