import { isArray, isNil, upperCaseFirstLetter } from '@/utils';
import { useBreakpoints } from './use-breakpoints';
import { useTheme } from './use-theme';

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
