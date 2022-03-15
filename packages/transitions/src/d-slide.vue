<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@daria/utils';
import { DBox } from '@daria/core';

interface Props {
  isVisible: boolean;
  direction?: 'horizontal' | 'vertical';
  duration?: number;
  distance?: number | string;
  appear?: boolean;
  invertOnOut?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  distance: '100%',
  direction: 'horizontal',
  appear: false,
  invertOnOut: false
});

const distance = computed(() => {
  const { distance } = props;
  return isNumber(distance) ? `${distance}px` : props.distance;
});

const outDistance = computed(() => {
  return props.invertOnOut ? `calc(-1 * ${distance.value})` : distance.value;
});

const transitionName = computed(() => `d-slide-${props.direction}`);
</script>

<template>
  <transition :name="transitionName" :appear="props.appear">
    <DBox
      v-if="props.isVisible"
      :transition="{ transform: props.duration }"
      v-bind="$attrs"
    >
      <slot />
    </DBox>
  </transition>
</template>

<style lang="postcss" scoped>
.d-slide-horizontal-enter-from {
  transform: translateX(v-bind('distance'));
}
.d-slide-horizontal-leave-to {
  transform: translateX(v-bind('outDistance'));
}

.d-slide-vertical-enter-from {
  transform: translateY(v-bind('distance'));
}
.d-slide-vertical-leave-to {
  transform: translateY(v-bind('outDistance'));
}
</style>
