<script lang="ts" setup>
import { inject } from 'vue';
import { DRAWER_INJECTION_KEY } from '@/constants';
import { DrawerContext } from './d-drawer.types';
import { DFadeTransition } from '@/components/transitions';

const context = inject<DrawerContext>(DRAWER_INJECTION_KEY);

const close = () => {
  context?.value.close();
};
</script>

<template>
  <DFadeTransition :is-visible="!!context?.isOpened" :duration="300" appear>
    <div class="d-drawer-overlay" @click="close" />
  </DFadeTransition>
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
