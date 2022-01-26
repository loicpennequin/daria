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
    is="d-box"
    :is-visible="context?.isOpened"
    :distance="distance"
    :duration="300"
    class="d-drawer-content"
    appear
  >
    <d-surface v-click-outside="close" v-bind="$attrs">
      <slot />
    </d-surface>
  </d-slide-transition>
</template>

<style lang="postcss" scoped>
.d-drawer-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: fit-content;
  height: 100vh;
  overflow: auto;
  @media (--viewport-sm) {
    width: 100%;
  }

  > * {
    height: 100%;
  }
}
</style>
