import { Maybe } from '@/utils';
import { computed, ref, watch, nextTick, Ref, toRefs } from 'vue';
import { useAccordion } from './use-accordion';

export const useAccordionItem = (contentElement: Ref<Maybe<HTMLElement>>) => {
  const accordion = useAccordion();

  const index = accordion.register();
  const isOpened = computed(() => accordion.isOpened(index));

  const contentHeight = ref<number | string>(0);

  watch(isOpened, isOpened => {
    if (!isOpened) {
      contentHeight.value = 0;
      return;
    }

    nextTick(() => {
      if (!contentElement.value) return;
      contentHeight.value = `${contentElement.value.scrollHeight}px`;
    });
  });

  return {
    index,
    contentHeight,
    isOpened,
    colorScheme: accordion.colorScheme,
    toggle: () => accordion.toggle(index),
    open: () => accordion.open(index),
    close: () => accordion.close(index)
  };
};
