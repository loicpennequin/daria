import { reactive } from 'vue';
import { debounce } from 'lodash-es';
import { getBreakpoints, upperCaseFirstLetter } from '@/utils';
import { useTheme } from '@/theme/use-theme';

const state = reactive<{ [key: string]: boolean }>({});
let breakpointKeys: string[] = ['sm', 'md', 'lg', 'xl', 'xxl'];

const checkCurrentDevice = debounce(
  () => {
    const breakpoints = getBreakpoints(...breakpointKeys);
    breakpoints.forEach((bp, index) => {
      const key = breakpointKeys[index];
      const keyUpper = upperCaseFirstLetter(key);

      state[key] = window.matchMedia(`screen and (max-width: ${bp})`).matches;
      state[`above${keyUpper}`] = window.matchMedia(
        `screen and (min-width: ${bp})`
      ).matches;
    });
  },
  16,
  { leading: true }
);

// waiting for the next tick for the breakpoint css variables to be defined at :root level
setTimeout(checkCurrentDevice);

window.addEventListener('resize', checkCurrentDevice);

export function useBreakpoints() {
  const theme = useTheme();
  breakpointKeys = Object.keys(theme.breakpoint);

  checkCurrentDevice();
  return state;
}
