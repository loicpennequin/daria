<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  is?: any;
  isVisible: boolean;
  duration?: number;
  appear?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  is: 'div',
  appear: false,
  duration: 300
});

const transition = computed(() => `${props.duration}ms`);
</script>

<template>
  <transition name="d-fade" :appear="props.appear">
    <component :is="is" v-if="props.isVisible" class="fade-transition">
      <slot />
    </component>
  </transition>
</template>

<style lang="scss" scoped>
.d-fade-enter-active,
.d-fade-leave-active {
  transition: opacity v-bind(transition);
}

.d-fade-enter-from,
.d-fade-leave-to {
  opacity: 0;
}
</style>
