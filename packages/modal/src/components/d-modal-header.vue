<script lang="ts" setup>
import { computed, unref } from 'vue';
import { useModal } from '../use-modal';
import { DBox, vReadableColor } from '@daria/core';
import { DSectionHeading } from '@daria/section';
import config from './d-modal.config';

const { isOpened, colorScheme, title, close, open, toggle } = useModal();

const styleProps = computed(() => ({
  p: 4,
  borderBottom: 'solid 1px',
  borderBottomColor: 'grey.1',
  ...config.getDerivedStyleProps({ colorScheme: unref(colorScheme) })?.header
}));

const slotProps = {
  isOpened,
  title,
  open,
  close,
  toggle
};
</script>

<template>
  <DBox is="header" v-bind="styleProps" v-readable-color="true">
    <slot v-bind="slotProps">
      <DSectionHeading mt="0">
        {{ title }}
      </DSectionHeading>
    </slot>
  </DBox>
</template>
