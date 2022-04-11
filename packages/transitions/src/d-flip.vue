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
  baseName: 'd-flip',
  transitions: ['transform'],
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
.d-flip-horizontal-enter-active,
.d-flip-horizontal-leave-active,
.d-flip-vertical-enter-active,
.d-flip-vertical-leave-active {
  transform-style: preserve-3d;
  transition: v-bind('styles.transition');
  transition-timing-function: v-bind('styles.transitionTimingFunction');
}

.d-flip-horizontal-enter-from {
  transform: rotateX(v-bind('value'));
}
.d-flip-horizontal-leave-to {
  transform: rotateX(v-bind('outValue'));
}

.d-flip-vertical-enter-from {
  transform: rotateY(v-bind('value'));
}
.d-flip-vertical-leave-to {
  transform: rotateY(v-bind('outValue'));
}
</style>
