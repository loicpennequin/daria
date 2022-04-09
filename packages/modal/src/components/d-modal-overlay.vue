<script lang="ts" setup>
import { DFade } from '@daria/transitions';
import { DBox } from '@daria/core';
import { useModal } from '../use-modal';
import DModalCloseButton from './d-modal-close-button.vue';

const { isOpened, close } = useModal();

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 20,
  bg: 'rgba(0, 0, 0, 0.5)'
};
</script>

<template>
  <DFade appear>
    <DBox v-if="isOpened" v-bind="overlayStyle" @click="close">
      <DModalCloseButton
        color="white"
        position="fixed"
        top="0"
        right="0"
        m="3"
      />
    </DBox>
  </DFade>
</template>
