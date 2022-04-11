<script setup lang="ts">
import { useTransition } from './use-transition';

interface Props {
  duration?: number | string;
  isGroup?: boolean;
  easing?: string;
}
const props = withDefaults(defineProps<Props>(), {
  isGroup: false,
  duration: 2,
  easing: 'ease-out'
});

const { name, is, styles } = useTransition(props, {
  baseName: 'd-fade',
  transitions: ['opacity']
});
</script>

<template>
  <component :is="is" :name="name">
    <slot />
  </component>
</template>

<style scoped>
.d-fade-enter-active,
.d-fade-leave-active {
  transition: v-bind('styles.transition');
  transition-timing-function: v-bind('styles.transitionTimingFunction');
}

.d-fade-enter-from,
.d-fade-leave-to {
  opacity: 0;
}
</style>
