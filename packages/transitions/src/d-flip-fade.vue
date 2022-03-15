<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@daria/utils';
import { DBox } from '@daria/core';

interface Props {
  isVisible: boolean;
  duration?: number;
  angle?: number | string;
  appear?: boolean;
  perspective?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  angle: '180deg',
  appear: false,
  perspective: 0
});

const style = computed(() => ({
  angle: isNumber(props.angle) ? `${props.angle}deg` : props.angle,
  perspective: isNumber(props.perspective)
    ? `${props.perspective}px`
    : props.perspective
}));
</script>

<template>
  <transition
    name="d-flip-fade"
    :appear="props.appear"
    :duration="props.duration"
  >
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
  perspective: v-bind('style.perspective');
}

.d-flip-fade-horizontal-enter-from,
.d-flip-fade-horizontal-leave-to {
  transform: rotateX(v-bind('style.angle'));
  opacity: 0;
}

.d-flip-fade-vertical-enter-from,
.d-flip-fade-vertical-leave-to {
  transform: rotateY(v-bind('style.angle'));
  opacity: 0;
}
</style>
