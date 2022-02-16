<script lang="ts" setup>
import { useModal } from './use-modal';
import { DFadeTransition } from '@/components/transitions';
import DModalCloseButton from './d-modal-close-button.vue';

const { isOpened, close } = useModal();
</script>

<template>
  <DFadeTransition :is-visible="isOpened" :duration="300" appear>
    <div class="d-modal-overlay" @click="close">
      <DModalCloseButton class="d-modal-overlay__close-button" m="3" />
    </div>
  </DFadeTransition>
</template>

<style lang="postcss" scoped>
.d-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

.d-modal-overlay__close-button {
  position: fixed;
  top: 0;
  right: 0;
  color: var(--d-color-white) !important  ;
}
</style>
