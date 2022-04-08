<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@daria/utils';
import { DBox } from '@daria/core';

interface Props {
  isVisible: boolean;
  duration?: number;
  direction?: 'horizontal' | 'vertical';
  angle?: number | string;
  appear?: boolean;
  invertOnOut?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  direction: 'horizontal',
  angle: '90deg',
  appear: false,
  invertOnOut: false
});

const computedAngle = computed(() =>
  isNumber(props.angle) ? `${props.angle}deg` : props.angle
);
const outAngle = computed(() =>
  props.invertOnOut ? `calc(-1 * ${computedAngle.value}` : computedAngle.value
);

const transitionName = computed(() => `d-flip-fade-${props.direction}`);
</script>

<template>
  <transition :name="transitionName" :appear="props.appear">
    <DBox
      v-if="props.isVisible"
      class="d-flip-fade-transition"
      v-bind="$attrs"
      :transition="{ opacity: props.duration, transform: props.duration }"
    >
      <slot />
    </DBox>
  </transition>
</template>

<style lang="postcss" scoped>
.d-flip-fade-transition {
  transform-style: preserve-3d;
}

.d-flip-fade-horizontal-enter-from {
  transform: rotateX(v-bind('computedAngle'));
  opacity: 0;
}
.d-flip-fade-horizontal-leave-to {
  transform: rotateX(v-bind('outAngle'));
  opacity: 0;
}

.d-flip-fade-vertical-enter-from {
  transform: rotateY(v-bind('computedAngle'));
  opacity: 0;
}
.d-flip-fade-vertical-leave-to {
  transform: rotateY(v-bind('outAngle'));
  opacity: 0;
}
</style>
