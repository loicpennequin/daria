<script setup lang="ts">
import { useSlots, computed } from 'vue';
import { StyleProp, useDefaultProp } from '@daria/theme';

import { DBox, DFlex, vReadableColor } from '@daria/core';
import { DIcon } from '@daria/icon';

interface Props {
  borderRadius?: StyleProp;
  isFullwidth?: boolean;
  leftIcon?: string;
  rightIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  borderRadius: useDefaultProp<number>('DButton.borderRadius'),
  isFullwidth: false
});

const slots = useSlots();

const styleProps = computed(() => ({
  px: 4,
  py: 3,
  align: 'center',
  justify: 'center',
  fontWeight: 'semibold',
  bdr: props.borderRadius,
  border: 'solid 1px'
}));
</script>

<template>
  <DFlex
    is="button"
    class="d-button"
    :is-inline="!props.isFullwidth"
    v-bind="styleProps"
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

  &[disabled] {
    background: #888;
  }
}
</style>
