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
    ? `${props.perspective}deg`
    : props.perspective
}));
</script>

<template>
  <transition name="d-flip" :appear="props.appear" :duration="props.duration">
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
  perspective: v-bind('style.perspective');
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
