<script lang="ts" setup>
import { computed } from 'vue';
import { useDrawer } from './use-drawer';
import { vClickOutside } from '@/directives';

import { DSlideTransition } from '@/components/transitions';
import { DBox } from '@/components/core';

const { isOpened, position, close } = useDrawer();

const distance = computed(() => (position.value === 'left' ? '-100%' : '100%'));
</script>

<template>
  <DSlideTransition
    is="d-surface"
    :is-visible="!!isOpened"
    :distance="distance"
    class="d-drawer-content"
    v-click-outside="close"
    p="0"
    appear
  >
    <DBox is="header" px="3" v-if="$slots.header">
      <slot name="header" />
    </DBox>

    <DBox class="d-drawer-content__body" px="3">
      <slot />
    </DBox>

    <DBox is="footer" v-if="$slots.footer">
      <slot name="footer" />
    </DBox>
  </DSlideTransition>
</template>

<style lang="postcss" scoped>
.d-drawer-content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  min-width: var(--d-breakpoint-xs);
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: var(--d-spacing-2);
  overflow: hidden;
  @media (--viewport-not-sm) {
    width: fit-content;
  }

  > header {
    border-bottom: solid 1px var(--d-color-grey-1);
  }
}

.d-drawer-content__body {
  overflow: auto;
  flex-grow: 1;
}
</style>
