<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@daria/utils';
import { DBox } from '@daria/core';

interface Props {
  isVisible: boolean;
  duration?: number;
  direction: 'horizontal' | 'vertical';
  angle?: number | string;
  appear?: boolean;
  perspective?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  direction: 'horizontal',
  angle: '180deg',
  appear: false,
  perspective: 0
});

const style = computed(() => ({
  angle: isNumber(props.angle) ? `${props.angle}deg` : props.angle
}));

const transitionName = computed(() => `d-flip-${props.direction}`);
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
.d-flip-transition {
  transform-style: preserve-3d;
}

.d-flip-horizontal-enter-from,
.d-flip-horizontal-leave-to {
  transform: rotateX(v-bind('style.angle'));
  opacity: 0;
}

.d-flip-vertical-enter-from,
.d-flip-vertical-leave-to {
  transform: rotateY(v-bind('style.angle'));
  opacity: 0;
}
</style>
