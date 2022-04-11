<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@daria/utils';
import { useTransition } from './use-transition';

interface Props {
  duration?: number | string;
  direction?: 'horizontal' | 'vertical';
  angle?: number | string;
  invertOnOut?: boolean;
  isGroup?: boolean;
  easing?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  direction: 'horizontal',
  angle: '90deg',
  invertOnOut: false,
  isGroup: false,
  easing: 'ease-out'
});

const { value, outValue, is, name, styles } = useTransition(props, {
  baseName: 'd-flip-fade',
  transitions: ['opacity', 'transform'],
  value: computed(() =>
    isNumber(props.angle) ? `${props.angle}deg` : props.angle
  )
});
</script>

<template>
  <component :is="is" :name="name">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.d-flip-fade-horizontal-enter-active,
.d-flip-fade-horizontal-leave-active,
.d-flip-fade-vertical-enter-active,
.d-flip-fade-vertical-leave-active {
  transform-style: preserve-3d;
  transition: v-bind('styles.transition');
  transition-timing-function: v-bind('styles.transitionTimingFunction');
}

.d-flip-fade-horizontal-enter-from {
  transform: rotateX(v-bind('value'));
  opacity: 0;
}
.d-flip-fade-horizontal-leave-to {
  transform: rotateX(v-bind('outValue'));
  opacity: 0;
}

.d-flip-fade-vertical-enter-from {
  transform: rotateY(v-bind('value'));
  opacity: 0;
}
.d-flip-fade-vertical-leave-to {
  transform: rotateY(v-bind('outValue'));
  opacity: 0;
}
</style>
