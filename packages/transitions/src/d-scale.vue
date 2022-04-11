<script setup lang="ts">
import { computed } from 'vue';
import { useTransition } from './use-transition';

interface Props {
  duration?: number | string;
  scale?: number | string;
  easing?: string;
}
const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  scale: 0,
  easing: 'ease-out'
});

const { value, outValue, is, name, styles } = useTransition(props, {
  baseName: 'd-scale',
  transitions: ['transform'],
  value: computed(() => props.scale)
});
</script>

<template>
  <component :is="is" :name="name">
    <slot />
  </component>
</template>

<style scoped>
.d-scale-enter-active,
.d-scale-leave-active {
  transition: v-bind('styles.transition');
  transition-timing-function: v-bind('styles.transitionTimingFunction');
}

.d-scale-enter-from {
  transform: scale(v-bind('value'));
}
.d-scale-leave-to {
  transform: scale(v-bind('outValue'));
}
</style>
