import { MaybeRef } from '@/utils';
import { onUnmounted, watchEffect, unref, Ref } from 'vue';
import { useBreakpoints } from './use-breakpoints';

export const useBodyScrollLock = (isLocked: MaybeRef<boolean> = true) => {
  const breakpoints = useBreakpoints();

  const unset = () => {
    document.getElementById('app')?.removeAttribute('inert');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('width');
  };

  watchEffect(onInvalidate => {
    const appElement = document.getElementById('app') as HTMLElement;

    const scrollbarWidth = appElement.offsetWidth - appElement.clientWidth;

    if (unref(isLocked)) {
      appElement.setAttribute('inert', 'true');
      document.body.style.overflow = 'hidden';
      if (!breakpoints.sm) return;

      document.body.style.width =
        document.body.clientWidth - scrollbarWidth + 'px';
    }

    onInvalidate(unset);
  });

  onUnmounted(unset);
};
