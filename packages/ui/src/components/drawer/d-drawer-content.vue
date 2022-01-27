<script lang="ts" setup>
import { inject, computed } from 'vue';
import { DRAWER_INJECTION_KEY } from '@/constants';
import { DrawerContext } from './d-drawer.types';
import { vClickOutside } from '@/directives';

const context = inject<DrawerContext>(DRAWER_INJECTION_KEY);

const distance = computed(() =>
  context?.value.direction === 'left' ? '100%' : '-100%'
);

const close = () => {
  context?.value.close();
};
</script>

<template>
  <d-slide-transition
    is="d-surface"
    :is-visible="context?.isOpened"
    :distance="distance"
    class="d-drawer-content"
    v-click-outside="close"
    p="0"
    appear
  >
    <d-box is="header" px="3">
      <slot name="header" />
    </d-box>

    <d-box class="d-drawer-content__body" px="3">
      <slot />
    </d-box>

    <d-box is="footer" px="3">
      <slot name="footer" />
    </d-box>
  </d-slide-transition>
</template>

<style lang="postcss" scoped>
.d-drawer-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: fit-content;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: var(--d-spacing-2);
  overflow: hidden;
  @media (--viewport-sm) {
    width: 100%;
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
