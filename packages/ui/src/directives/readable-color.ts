import { getReadableColor, Maybe } from '@/utils';
import { throttle } from 'lodash-es';
import { Directive } from 'vue';

const observers = new WeakMap<HTMLElement, MutationObserver>();

export const vReadableColor: Directive = {
  mounted(el: HTMLElement, { value }) {
    const setColor = throttle(() => {
      if (!value) {
        el.style.removeProperty('color');
        return;
      }

      let backgroundColor;
      let element: Maybe<HTMLElement> = el;

      while (!backgroundColor) {
        if (!element) break;
        const computedStyle = window.getComputedStyle(element);
        backgroundColor = computedStyle.backgroundColor;
        element = el.parentElement;
      }

      if (backgroundColor) {
        el.style.color = getReadableColor(backgroundColor);
      }
    }, 50);

    setColor();

    const observer = new window.MutationObserver(setColor);
    observer.observe(el, {
      attributes: true,
      childList: false,
      subtree: false
    });
    observers.set(el, observer);
    el.addEventListener('mouseenter', setColor);
    el.addEventListener('mouseleave', setColor);
    el.addEventListener('focus', setColor);
    el.addEventListener('blur', setColor);
    el.addEventListener('transitionend', setColor);
  },

  unmounted(el: HTMLElement) {
    const observer = observers.get(el);
    observer?.disconnect?.();
    observers.delete(el);
  }
};
