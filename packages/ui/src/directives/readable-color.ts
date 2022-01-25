import { getReadableColor, Maybe } from '@/utils';
import { throttle } from 'lodash-es';
import { Directive } from 'vue';

const observers = new WeakMap<HTMLElement, MutationObserver>();

export const vReadableColor: Directive = {
  mounted(el: HTMLElement, { value }) {
    const setColor = (checkedElement: HTMLElement = el) => {
      if (!value) {
        el.style.removeProperty('color');
        el.dataset.readableColor = undefined;
        return;
      }

      const backgroundColor =
        window.getComputedStyle(checkedElement).backgroundColor;

      if (backgroundColor) {
        checkedElement.style.setProperty(
          '--readable-color',
          getReadableColor(backgroundColor)
        );
        checkedElement.dataset.readableColor = 'true';
        el.dataset.readableColor = 'true';
      } else if (checkedElement.parentElement) {
        setColor(checkedElement.parentElement);
      }
    };

    setColor();

    const throttledSetColor = throttle(() => setColor(), 50);
    const observer = new window.MutationObserver(mutationList => {
      const shouldIgnore = mutationList.some(
        value => value.attributeName === 'data-readable-color'
      );
      if (shouldIgnore) return;

      throttledSetColor();
    });
    observer.observe(el, {
      attributes: true,
      childList: false,
      subtree: false
    });
    observers.set(el, observer);
    el.addEventListener('mouseenter', throttledSetColor);
    el.addEventListener('mouseleave', throttledSetColor);
    el.addEventListener('focus', throttledSetColor);
    el.addEventListener('blur', throttledSetColor);
    el.addEventListener('transitionend', throttledSetColor);
  },

  unmounted(el: HTMLElement) {
    const observer = observers.get(el);
    observer?.disconnect?.();
    observers.delete(el);
  }
};
