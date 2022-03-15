import { Maybe } from '@daria/utils';
import { computed, provide, ref, watch, nextTick, Ref } from 'vue';
import { useAccordion } from '../accordion';
import { ACCORDION_ITEM_INJECTION_KEY } from '../constants';

export const useAccordionItem = (contentElement: Ref<Maybe<HTMLElement>>) => {
  const accordion = useAccordion();

  const index = accordion.register();
  const isOpened = computed(() => accordion.isOpened(index));

  const contentHeight = ref<number | string>(0);

  watch(
    isOpened,
    isOpened => {
      if (!isOpened) {
        contentHeight.value = 0;
        return;
      }

      nextTick(() => {
        if (!contentElement.value) return;
        contentHeight.value = `${contentElement.value.scrollHeight}px`;
      });
    },
    { immediate: true }
  );

  const accordionItem = {
    index,
    contentHeight,
    isOpened,
    colorScheme: accordion.colorScheme,
    toggle: () => accordion.toggle(index),
    open: () => accordion.open(index),
    close: () => accordion.close(index)
  };
  provide(ACCORDION_ITEM_INJECTION_KEY, accordionItem);

  return accordionItem;
};
