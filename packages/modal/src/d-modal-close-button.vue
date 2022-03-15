<script lang="ts" setup>
import { useModal } from './use-modal';
import { DButton } from '@daria/button';
import { DIcon } from '@daria/icon';

const { close } = useModal();
</script>

<template>
  <DButton variant="ghost" @click.stop="close" px="0" py="0">
    <DIcon icon="close" size="4" />
  </DButton>
</template>
