<script lang="ts" setup>
import { useModal } from './use-modal';
import { vClickOutside } from '@/directives';

import { DSlideFadeTransition } from '@/components/transitions';
import { DBox, DSurface } from '@/components/core';
import { DFlex } from '@/components/layout';

const { isOpened, close } = useModal();
</script>

<template>
  <DSlideFadeTransition
    :is-visible="isOpened"
    :distance="-200"
    direction="vertical"
    class="d-modal-content"
    p="0"
    appear
  >
    <DSurface v-click-outside="close" mt="6">
      <DFlex direction="column">
        <DBox is="header" px="3" v-if="$slots.header">
          <slot name="header" />
        </DBox>

        <DBox class="d-modal-content__body" px="3" py="1">
          <slot />
        </DBox>

        <DBox is="footer" v-if="$slots.footer">
          <slot name="footer" />
        </DBox>
      </DFlex>
    </DSurface>
  </DSlideFadeTransition>
</template>

<style lang="postcss" scoped>
.d-modal-content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 20;
  min-width: var(--d-breakpoint-xs);
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  > header {
    border-bottom: solid 1px var(--d-color-grey-1);
  }
}

.d-modal-content__body {
  overflow: auto;
  flex-grow: 1;
}
</style>
