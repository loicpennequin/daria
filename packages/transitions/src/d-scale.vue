<script setup lang="ts">
import { DBox } from '@daria/core';

interface Props {
  isVisible: boolean;
  duration?: number;
  scale?: number;
  appear?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  appear: false,
  duration: 2,
  scale: 0.5
});
</script>

<template>
  <transition name="d-scale" :appear="props.appear">
    <DBox
      v-if="props.isVisible"
      :transition="{ transform: props.duration }"
      v-bind="$attrs"
    >
      <slot />
    </DBox>
  </transition>
</template>

<style lang="scss">
.d-scale-enter-from,
.d-scale-leave-to {
  transform: scale(v-bind('scale'));
}
</style>
