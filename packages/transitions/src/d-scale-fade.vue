<script setup lang="ts">
import { computed } from 'vue';
import { useTransition } from './use-transition';

interface Props {
  duration?: number;
  scale?: number | string;
}
const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  scale: 0
});

const { value, outValue, is, name, styles } = useTransition(props, {
  baseName: 'd-scale-fade',
  transitions: ['opacity', 'transform'],
  value: computed(() => props.scale)
});
</script>

<template>
  <component :is="is" :name="name">
    <slot />
  </component>
</template>

<style scoped>
.d-scale-fade-enter-active,
.d-scale-fade-leave-active {
  transition: v-bind('styles.transition');
}

.d-scale-fade-enter-from {
  transform: scale(v-bind('value'));
  opacity: 0;
}
.d-scale-fade-leave-to {
  transform: scale(v-bind('outValue'));
  opacity: 0;
}
</style>
