<script setup lang="ts">
import { useTransition } from './use-transition';

interface Props {
  duration?: number;
  isGroup?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isGroup: false,
  duration: 2
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
}

.d-fade-enter-from,
.d-fade-leave-to {
  opacity: 0;
}
</style>
