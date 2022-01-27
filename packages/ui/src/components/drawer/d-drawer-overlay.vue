<script lang="ts" setup>
import { inject } from 'vue';
import { DRAWER_INJECTION_KEY } from '@/constants';
import { DrawerContext } from './d-drawer.types';
import { vClickOutside } from '@/directives';

const context = inject<DrawerContext>(DRAWER_INJECTION_KEY);

const close = () => {
  context?.value.close();
};
</script>

<template>
  <d-fade-transition :is-visible="context?.isOpened" :duration="300" appear>
    <div class="d-drawer-overlay" @click="close" />
  </d-fade-transition>
</template>

<style lang="postcss" scoped>
.d-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
