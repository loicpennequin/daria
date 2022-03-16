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
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  direction: 'horizontal',
  angle: '90deg',
  appear: false
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
      class="d-flip-transition"
      v-bind="$attrs"
      :transition="{ transform: props.duration }"
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
}

.d-flip-vertical-enter-from,
.d-flip-vertical-leave-to {
  transform: rotateY(v-bind('style.angle'));
}
</style>
