import { MaybeRef, useSafeInject } from '@daria/utils';
import { onUnmounted, watchEffect, unref, inject } from 'vue';
import { useBreakpoints } from './use-breakpoints';
import { DARIA_UI_INJECTION_KEY } from '@daria/ui';

export const useBodyScrollLock = (isLocked: MaybeRef<boolean> = true) => {
  const breakpoints = useBreakpoints();
  const { getAppRootElement } = useSafeInject(DARIA_UI_INJECTION_KEY);

  const unset = () => {
    const root = getAppRootElement();
    if (!root) return;

    root?.removeAttribute('inert');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('width');
  };

  watchEffect(onInvalidate => {
    const root = getAppRootElement();

    if (!root) return;
    const scrollbarWidth = root.offsetWidth - root.clientWidth;

    if (unref(isLocked)) {
      root.setAttribute('inert', 'true');
      document.body.style.overflow = 'hidden';
      if (!breakpoints.sm) return;

      document.body.style.width =
        document.body.clientWidth - scrollbarWidth + 'px';
    }

    onInvalidate(unset);
  });

  onUnmounted(unset);
};
