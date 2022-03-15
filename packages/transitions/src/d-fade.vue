<script setup lang="ts">
import { computed } from 'vue';
import { DBox } from '@daria/core';

interface Props {
  isVisible: boolean;
  duration?: number;
  appear?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  appear: false,
  duration: 2
});
</script>

<template>
  <transition name="d-fade" :appear="props.appear">
    <DBox
      v-if="props.isVisible"
      :transition="{ opacity: props.duration }"
      v-bind="$attrs"
    >
      <slot />
    </DBox>
  </transition>
</template>

<style lang="scss" scoped>
.d-fade-enter-from,
.d-fade-leave-to {
  opacity: 0;
}
</style>
