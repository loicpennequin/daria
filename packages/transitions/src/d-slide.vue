<script lang="ts" setup>
import { computed } from 'vue';
import { isNumber } from '@daria/utils';
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
  baseName: 'd-slide',
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
.d-slide-horizontal-enter-active,
.d-slide-horizontal-leave-active,
.d-slide-vertical-enter-active,
.d-slide-vertical-leave-active {
  transform-style: preserve-3d;
  transition: v-bind('styles.transition');
}

.d-slide-horizontal-enter-from {
  transform: translateX(v-bind('value'));
}
.d-slide-horizontal-leave-to {
  transform: translateX(v-bind('outValue'));
}

.d-slide-vertical-enter-from {
  transform: translateY(v-bind('value'));
}
.d-slide-vertical-leave-to {
  transform: translateY(v-bind('outValue'));
}
</style>
