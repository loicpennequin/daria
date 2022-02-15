<script lang="ts" setup>
import { DButton, DIcon, DBox } from '../core';
import { computed, ref } from 'vue';
import { Maybe } from '@/utils';
import { useAccordionItem } from './use-accordion-item';

interface Props {
  label?: string;
}

const props = defineProps<Props>();

const contentElement = ref<Maybe<HTMLElement>>(null);
const { index, colorScheme, contentHeight, isOpened, toggle, open, close } =
  useAccordionItem(contentElement);

const slotProps = {
  index,
  isOpened,
  toggle,
  open,
  close
};

const onToggleClick = () => {
  toggle();
};
</script>

<template>
  <div class="d-accordion-item">
    <slot name="toggle" v-bind="slotProps">
      <DButton
        class="d-accordion-item__toggle"
        :class="isOpened && 'd-accordion-item--is-opened'"
        variant="ghost"
        is-fullwidth
        @click="onToggleClick"
        border-radius="0"
        py="2"
        pl="0"
        :color-scheme="colorScheme"
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
      <slot v-bind="slotProps" v-if="isOpened" />
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
  height: v-bind('contentHeight');
}

.d-accordion-item--is-opened {
  .d-accordion-item__icon {
    transform: rotateZ(-0.5turn);
  }
}
</style>
