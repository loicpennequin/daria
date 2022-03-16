<script lang="ts" setup>
import { computed } from 'vue';
import { useDrawer } from '../use-drawer';
import { DModalContent } from '@daria/modal';

interface Props {
  size?: number | string;
}

const props = withDefaults(defineProps<Props>(), { size: 0 });

const { position } = useDrawer();

const isVertical = computed(() => ['top', 'bottom'].includes(position.value));

const distance = computed(() =>
  ['left', 'top'].includes(position.value) ? '-100%' : '100%'
);
const size = computed(() => (isVertical.value ? 'full' : props.size));
const direction = computed(() =>
  isVertical.value ? 'vertical' : 'horizontal'
);

const styleProps = computed(() => ({
  left: position.value !== 'right' && 0,
  right: position.value !== 'left' && 0,
  top: position.value !== 'bottom' && 0,
  bottom: position.value === 'bottom' && 0,
  mx: 0,
  mt: 0,
  h: ['left', 'right'].includes(position.value) && '100vh',
  maxH: '100vh'
}));
</script>

<template>
  <DModalContent
    :direction="direction"
    :size="size"
    :distance="distance"
    v-bind="styleProps"
  >
    <template #header>
      <slot name="header" />
    </template>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </DModalContent>
</template>

<style lang="postcss" scoped></style>
