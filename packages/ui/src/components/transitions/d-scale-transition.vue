<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  is?: any;
  isVisible: boolean;
  duration?: number;
  scale?: number;
  appear?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  is: 'div',
  appear: false,
  duration: 300,
  scale: 0.5
});

const transition = computed(() => `${props.duration}ms`);
</script>

<template>
  <transition name="d-scale" :appear="props.appear">
    <component :is="is" v-if="props.isVisible" class="d-scale-transition">
      <slot />
    </component>
  </transition>
</template>

<style lang="scss">
.d-scale-enter-active,
.d-scale-leave-active {
  transition: transform v-bind(transition);
}

.d-scale-enter-from,
.d-scale-leave-to {
  transform: scale(v-bind('scale'));
}
</style>
