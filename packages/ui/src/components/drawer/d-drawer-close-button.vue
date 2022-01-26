<script lang="ts" setup>
import { inject } from 'vue';
import { DRAWER_INJECTION_KEY } from '@/constants';
import { DrawerContext } from './d-drawer.types';

const context = inject<DrawerContext>(DRAWER_INJECTION_KEY);

const close = () => {
  context?.value.close();
};
</script>

<template>
  <d-button variant="ghost" @click="close" p="0">
    <d-icon icon="close" size="5" />
  </d-button>
</template>

<style lang="postcss" scoped>
.d-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
