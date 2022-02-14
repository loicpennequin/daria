<script lang="ts" setup>
import { useAccordion } from './use-accordion';
import { DButton, DIcon, DBox } from '../core';
import { computed, nextTick, ref, watch } from 'vue';
import { Maybe } from '@/utils';

interface Props {
  label?: string;
}

const props = defineProps<Props>();

const accordion = useAccordion();

const index = accordion.value.register();
const isOpened = computed(() => accordion.value.isOpened(index));

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

const slotProps = computed(() => ({
  index,
  isOpened: accordion.value.isOpened(index),
  toggle: () => {
    console.log('toggle');
    accordion.value.toggle(index);
  },
  open: () => accordion.value.open(index),
  close: () => accordion.value.close(index)
}));
</script>

<template>
  <div class="d-accordion-item">
    <slot name="toggle" v-bind="slotProps">
      <DButton
        class="d-accordion-item__toggle"
        :class="accordion.isOpened(index) && 'd-accordion-item--is-opened'"
        variant="ghost"
        is-fullwidth
        @click="accordion.toggle(index)"
        border-radius="0"
        py="2"
        pl="0"
        :color-scheme="accordion.colorScheme"
      >
        <template #right>
          <DIcon
            icon="chevronDown"
            :transition="{ transform: 1 }"
            class="d-accordion-item__icon"
          />
        </template>
        <span>
          {{ props.label }}
        </span>
      </DButton>
    </slot>

    <DBox
      :forward-ref="el => (contentElement = el)"
      class="d-accordion-item__content"
      :transition="{ height: 2 }"
    >
      <d-slide-transition
        direction="vertical"
        distance="-100%"
        :is-visible="isOpened"
      >
        <slot v-bind="slotProps" />
      </d-slide-transition>
    </DBox>
  </div>
</template>

<style lang="postcss" scoped>
.d-accordion-item {
  .d-accordion-item__toggle {
    text-align: left;
    border-bottom: solid 1px var(--d-color-grey-2);
    > span {
      color: var(--d-color-black);
    }
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
