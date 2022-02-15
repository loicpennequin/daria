<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@/utils';

interface Props {
  is?: any;
  isVisible: boolean;
  direction?: 'horizontal' | 'vertical';
  duration?: number;
  angle?: number | string;
  appear?: boolean;
  perspective?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  is: 'div',
  duration: 300,
  distance: '100%',
  direction: 'horizontal',
  appear: false,
  perspective: 0
});

const style = computed(() => ({
  duration: `${props.duration}ms`,
  distance: isNumber(props.distance) ? `${props.distance}deg` : props.distance,
  perspective: isNumber(props.perspective)
    ? `${props.perspective}deg`
    : props.perspective
}));

const transitionName = computed(() => `d-flip-${props.direction}`);
</script>

<template>
  <transition
    :name="transitionName"
    :appear="props.appear"
    :duration="props.duration"
  >
    <component :is="is" v-if="props.isVisible" class="d-flip-transition">
      <slot />
    </component>
  </transition>
</template>

<style lang="postcss" scoped>
.d-flip-transition {
  perspective: v-bind('style.perspective');
}
.d-flip-horizontal-enter-active,
.d-flip-horizontal-leave-active,
.d-flip-vertical-enter-active,
.d-flip-vertical-leave-active {
  transition: transform v-bind('style.duration');
}

.d-flip-horizontal-enter-from,
.d-flip-horizontal-leave-to {
  transform: rotateX(v-bind('style.distance'));
}

.d-flip-vertical-enter-from,
.d-flip-vertica-leave-to {
  transform: rotateY(v-bind('style.distance'));
}
</style>
