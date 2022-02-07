<script lang="ts" setup>
import { useDrawer } from './use-drawer';
import { DIcon } from '@/components/core';

const drawer = useDrawer();
</script>

<template>
  <DButton variant="ghost" @click="drawer.close" px="0" py="0">
    <DIcon icon="close" size="5" />
  </DButton>
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
