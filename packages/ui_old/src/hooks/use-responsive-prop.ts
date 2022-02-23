import { isArray, isNil, upperCaseFirstLetter } from '@/utils';
import { useBreakpoints } from './use-breakpoints';
import { useTheme } from './use-theme';

export const useResponsiveProp = () => {
  const breakpoints = useBreakpoints();
  const theme = useTheme();

  return <T = any>(val: unknown, { isBoolean = false } = {}): T => {
    const keys = Object.keys(theme.breakpoint);

    if (isArray(val)) {
      return val.reduce((acc, current, index) => {
        const key = `above${upperCaseFirstLetter(keys[index])}`;

        if (isNil(breakpoints[key])) return acc;

        return breakpoints[key] ? current : acc;
      }, val[0]);
    }

    // this handle declaring boolean props as short property
    // eg: <foo my-prop /> instead of <foo :my-prop="true" />
    // since the prop has been declared as an Array, vue doesnt automatically cast is as boolean and is an empty string instead
    if (isBoolean && val === '') return true as unknown as T;

    return val as T;
  };
};
