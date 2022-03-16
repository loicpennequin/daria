<script lang="ts" setup>
import { useModal } from '../use-modal';
import { DFlex } from '@daria/layout';

interface Props {
  size: number;
}

const { isOpened, colorScheme, close, open, toggle } = useModal();

const styleProps = {
  p: 4,
  justify: 'flex-end',
  gap: 4
};

const slotProps = {
  isOpened,
  colorScheme,
  open,
  close,
  toggle
};
</script>

<template>
  <DFlex is="footer" v-bind="styleProps">
    <slot v-bind="slotProps" />
  </DFlex>
</template>
