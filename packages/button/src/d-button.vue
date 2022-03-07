<script setup lang="ts">
import { useSlots } from 'vue';
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
</script>

<template>
  <DFlex
    is="button"
    class="d-button"
    :bdr="props.borderRadius"
    px="3"
    py="1"
    align="center"
    justify="center"
    font-weight="semibold"
    is-inline
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
}

.d-button--is-uppercase {
  text-transform: uppercase;
}
</style>
