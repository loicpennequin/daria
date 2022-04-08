<script lang="ts" setup>
import { ref, watch, nextTick, computed } from 'vue';
import { getFocusableChildren, KEYBOARD, Maybe } from '@daria/utils';
import { vClickOutside, DBox, DSurface, useEventListener } from '@daria/core';
import { DSlideFade } from '@daria/transitions';
import { DFlex } from '@daria/layout';
import { DSection } from '@daria/section';
import { useModal } from '../use-modal';
import DModalHeader from './d-modal-header.vue';

interface Props {
  size?: number | string;
}

const props = withDefaults(defineProps<Props>(), { size: 1 });
const { isOpened, colorScheme, title, isScrollInside, close, open, toggle } =
  useModal();

useEventListener('keydown', (e: KeyboardEvent) => {
  switch (e.key) {
    case KEYBOARD.ESCAPE:
      return close();
    default:
      return;
  }
});

const triggerRef = ref<Maybe<HTMLElement>>(null);
const contentRef = ref<Maybe<HTMLElement>>(null);
const focusRef = ref<Maybe<HTMLElement>>(null);

const onModalOpen = () => {
  triggerRef.value = document.activeElement as HTMLElement;

  nextTick(() => {
    const children = getFocusableChildren(contentRef.value);
    const elementToFocus = focusRef.value ?? children[0];

    (elementToFocus as Maybe<HTMLElement>)?.focus();
  });
};

const onModalClose = () => {
  triggerRef.value?.focus();
};

watch(isOpened, async isOpened => {
  isOpened ? onModalOpen() : onModalClose();
});

const contentForwardRef = (el: HTMLElement) => {
  contentRef.value = el;
};

const slotProps = computed(() => ({
  isOpened: isOpened.value,
  title: title.value,
  colorScheme: colorScheme.value,
  open,
  close,
  toggle,
  focusRef: (el: HTMLElement) => {
    focusRef.value = el;
  }
}));

const styleProps = computed(() => ({
  content: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 30,
    mt: 6,
    mx: 'auto',
    p: 0,
    w: `container.${props.size}`,
    maxW: '100%',
    maxH: `calc(100vh - 2 * var(--d-space-6))`,
    overflow: !isScrollInside.value && 'auto',
    bg: 'white',
    display: 'flex',
    flexDirection: 'column'
  },
  body: {
    px: 4,
    py: 3,
    overflow: isScrollInside.value && 'auto',
    flexGrow: 1,
    lineHeight: 1.4
  }
}));
</script>

<template>
  <DSlideFade
    appear
    direction="vertical"
    is="section"
    :is-visible="isOpened"
    :distance="-200"
    :forward-ref="contentForwardRef"
    v-click-outside="close"
    v-bind="styleProps.content"
  >
    <DSection>
      <slot name="header" v-bind="slotProps" v-if="$slots.header || title">
        <DModalHeader />
      </slot>

      <DBox v-bind="styleProps.body">
        <slot v-bind="slotProps" />
      </DBox>

      <slot name="footer" v-bind="slotProps" />
    </DSection>
  </DSlideFade>
</template>
