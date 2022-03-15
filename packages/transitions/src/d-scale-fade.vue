<script setup lang="ts">
import { computed } from 'vue';
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
  <transition name="d-scale-fade" :appear="props.appear">
    <DBox
      v-if="props.isVisible"
      :transition="{ transform: props.duration, opacity: props.duration }"
      v-bind="$attrs"
    >
      <slot />
    </DBox>
  </transition>
</template>

<style lang="scss">
.d-scale-fade-enter-from,
.d-scale-fade-leave-to {
  transform: scale(v-bind('props.scale'));
  opacity: 0;
}
</style>
