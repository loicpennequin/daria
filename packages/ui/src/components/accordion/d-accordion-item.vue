<script lang="ts" setup>
import { useAccordion } from './use-accordion';
import { DButton, DIcon, DBox } from '../core';
import { computed, nextTick, ref, watch } from 'vue';
import { isNil, isNumber, Maybe } from '@/utils';

const accordion = useAccordion();
const index = accordion.value.register();
const isOpened = computed(() => {
  const { openedIndex } = accordion.value;
  if (isNil(openedIndex)) return false;
  if (isNumber(openedIndex)) return openedIndex === index;

  return openedIndex.includes(index);
});

const toggle = () => {
  isOpened.value ? accordion.value.close(index) : accordion.value.open(index);
};

const contentElement = ref<Maybe<HTMLElement>>(null);
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
</script>

<template>
  <div class="d-accordion-item">
    <DButton
      class="d-accordion-item__toggle"
      :class="isOpened && 'd-accordion-item--is-opened'"
      variant="ghost"
      is-fullwidth
      @click="toggle"
      border-radius="0"
      py="2"
    >
      <template #right-icon>
        <DIcon
          icon="chevronDown"
          :transition="{ transform: 1 }"
          class="d-accordion-item__icon"
        />
      </template>
      <slot name="toggle" v-bind="{ isOpened }" />
    </DButton>
    <DBox
      :forward-ref="el => (contentElement = el)"
      :p="isOpened ? 2 : 0"
      class="d-accordion-item__content"
      :transition="{ height: 2 }"
    >
      <slot v-bind="{ isOpened }" v-if="isOpened" />
    </DBox>
  </div>
</template>

<style lang="postcss" scoped>
.d-accordion-item {
  .d-accordion-item__toggle {
    text-align: left;
    border-bottom: solid 1px var(--d-color-grey-2);
  }
}

.d-accordion-item__content {
  overflow: hidden;
  height: v-bind(contentHeight);
}

.d-accordion-item--is-opened {
  .d-accordion-item__icon {
    transform: rotateZ(-0.5turn);
  }
}
</style>
