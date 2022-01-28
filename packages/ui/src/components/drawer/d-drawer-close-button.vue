<script lang="ts" setup>
import { inject } from 'vue';
import { DRAWER_INJECTION_KEY } from '@/constants';
import { DrawerContext } from './d-drawer.types';

import { DButton } from '@/components/button';
import { DIcon } from '@/components/icon';

const context = inject<DrawerContext>(DRAWER_INJECTION_KEY);

const close = () => {
  context?.value.close();
};
</script>

<template>
  <DButton variant="ghost" @click="close" px="0" py="0">
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
