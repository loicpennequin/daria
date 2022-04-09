<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@daria/utils';
import { DBox } from '@daria/core';
import { useTransition } from './use-transition';

interface Props {
  direction?: 'horizontal' | 'vertical';
  duration?: number;
  distance?: number | string;
  invertOnOut?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  distance: '100%',
  direction: 'horizontal',
  invertOnOut: false
});

const { value, outValue, is, name, styles } = useTransition(props, {
  baseName: 'd-slide-fade',
  transitions: ['opacity', 'transform'],
  value: computed(() => {
    const { distance } = props;
    return isNumber(distance) ? `${distance}px` : props.distance;
  })
});
</script>

<template>
  <component :is="is" :name="name">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.d-slide-fade-horizontal-enter-active,
.d-slide-fade-horizontal-leave-active,
.d-slide-fade-vertical-enter-active,
.d-slide-fade-vertical-leave-active {
  transition: v-bind('styles.transition');
}

.d-slide-fade-horizontal-enter-from {
  transform: translateX(v-bind('value'));
  opacity: 0;
}
.d-slide-fade-horizontal-leave-to {
  transform: translateX(v-bind('outValue'));
  opacity: 0;
}

.d-slide-fade-vertical-enter-from {
  transform: translateY(v-bind('value'));
  opacity: 0;
}
.d-slide-fade-vertical-leave-to {
  transform: translateY(v-bind('outValue'));
  opacity: 0;
}
</style>
