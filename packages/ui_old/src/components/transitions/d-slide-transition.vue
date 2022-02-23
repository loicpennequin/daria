<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@/utils';

interface Props {
  is?: any;
  isVisible: boolean;
  direction?: 'horizontal' | 'vertical';
  duration?: number;
  distance?: number | string;
  appear?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  is: 'div',
  duration: 300,
  distance: '100%',
  direction: 'horizontal',
  appear: false
});

const style = computed(() => ({
  duration: `${props.duration}ms`,
  distance: isNumber(props.distance) ? `${props.distance}px` : props.distance
}));

const transitionName = computed(() => `d-slide-${props.direction}`);
</script>

<template>
  <transition
    :name="transitionName"
    :appear="props.appear"
    :duration="props.duration"
  >
    <component :is="is" v-if="props.isVisible" class="d-slide-transition">
      <slot />
    </component>
  </transition>
</template>

<style lang="postcss" scoped>
.d-slide-horizontal-enter-active,
.d-slide-horizontal-leave-active,
.d-slide-vertical-enter-active,
.d-slide-vertical-leave-active {
  transition: transform v-bind('style.duration');
}

.d-slide-horizontal-enter-from,
.d-slide-horizontal-leave-to {
  transform: translateX(v-bind('style.distance'));
}

.d-slide-vertical-enter-from,
.d-slide-vertical-leave-to {
  transform: translateY(v-bind('style.distance'));
}
</style>
