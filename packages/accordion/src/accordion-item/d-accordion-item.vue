<script lang="ts" setup>
import { ref } from 'vue';
import { DBox, DSurface } from '@daria/core';
import { Maybe } from '@daria/utils';
import { useAccordionItem } from './use-accordion-item';
import { DAccordionToggle } from '../accordion-toggle';

interface Props {
  label?: string;
}

const props = defineProps<Props>();

const contentElement = ref<Maybe<HTMLElement>>(null);
const { index, contentHeight, isOpened, toggle, open, close } =
  useAccordionItem(contentElement);

const slotProps = {
  index,
  isOpened,
  contentHeight,
  toggle,
  open,
  close
};

const setContentRef = (el: any) => {
  contentElement.value = el;
};
</script>

<template>
  <DBox border-bottom="solid 1px" border-bottom-color="grey.3">
    <slot name="toggle" v-bind="slotProps">
      <DAccordionToggle>
        <slot name="toggle-label" v-bind="slotProps">
          {{ props.label }}
        </slot>
      </DAccordionToggle>
    </slot>

    <slot name="content-wrapper" v-bind="slotProps">
      <DBox
        :forward-ref="setContentRef"
        overflow="hidden"
        :height="contentHeight"
        :transition="{ height: 2 }"
      >
        <DSurface>
          <slot v-bind="slotProps" />
        </DSurface>
      </DBox>
    </slot>
  </DBox>
</template>
