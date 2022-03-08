<script setup lang="ts">
import { useSlots, computed } from 'vue';
import { StyleProp } from '@daria/theme';
import config from './d-button.config';
import { DBox, DFlex, vReadableColor } from '@daria/core';
import { DIcon } from '@daria/icon';
import { merge } from 'lodash-es';

interface Props {
  colorScheme?: string;
  borderRadius?: StyleProp;
  isFullwidth?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  variant?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ...config.defaultProps,
  isFullwidth: false,
  variant: 'full'
});

const slots = useSlots();

const styleProps = computed(() =>
  merge(
    {
      px: 4,
      py: 3,
      align: 'center',
      justify: 'center',
      fontWeight: 'semibold',
      bdr: props.borderRadius,
      border: 'solid 1px',
      variant: props.variant,
      w: props.isFullwidth ? '100%' : null
    },
    config.getDerivedStyleProps(props)
  )
);
</script>

<template>
  <DFlex
    is="button"
    class="d-button"
    :is-inline="!props.isFullwidth"
    v-bind="styleProps"
    v-readable-color="props.variant === 'full'"
  >
    <DBox mr="2" :ml="-1" v-if="props.leftIcon || slots.left">
      <slot name="left">
        <DIcon :icon="props.leftIcon || ''" />
      </slot>
    </DBox>

    <slot />

    <DBox ml="2" :mr="-1" v-if="props.rightIcon || slots.right">
      <slot name="right">
        <DIcon :icon="rightIcon || ''" />
      </slot>
    </DBox>
  </DFlex>
</template>

<style lang="postcss" scoped>
.d-button {
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;

  &[disabled] {
    background: #888;
  }
}
</style>
