<script lang="ts" setup>
import { DFadeTransition } from '@/components/transitions';
import { useDrawer } from './use-drawer';

const { isOpened, close } = useDrawer();
</script>

<template>
  <DFadeTransition :is-visible="isOpened" :duration="300" appear>
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
