<script lang="ts" setup>
import { useModal } from './use-modal';
import { DBox } from '@daria/core';

interface Props {
  size: number;
}

const { isOpened, close, open, toggle } = useModal();

const styleProps = {
  p: 4,
  borderBottom: 'solid 1px',
  borderBottomColor: 'grey.1'
};

const slotProps = {
  isOpened,
  open,
  close,
  toggle
};
</script>

<template>
  <DBox is="header" v-bind="styleProps">
    <slot v-bind="slotProps" />
  </DBox>
</template>
