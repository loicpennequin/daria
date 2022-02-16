<script lang="ts" setup>
import { useModal } from './use-modal';
import { DIcon, DButton } from '@/components/core';

const { close } = useModal();
</script>

<template>
  <DButton
    variant="ghost"
    @click.stop="close"
    px="0"
    py="0"
    class="d-modal-close-button"
  >
    <DIcon icon="close" size="6" />
  </DButton>
</template>

<style lang="postcss" scoped></style>
