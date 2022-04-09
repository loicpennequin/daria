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
  left: position.value !== 'right' ? 0 : 'auto',
  right: position.value !== 'left' ? 0 : 'auto',
  top: position.value !== 'bottom' ? 0 : 'auto',
  bottom: position.value === 'bottom' ? 0 : 'auto',
  mx: 0,
  mt: 0,
  minH: ['left', 'right'].includes(position.value) && '100vh'
}));
</script>

<template>
  <DModalContent
    :direction="direction"
    :size="size"
    :distance="distance"
    v-bind="styleProps"
  >
    <template #header="modalProps">
      <slot name="header" v-bind="modalProps" />
    </template>

    <template #default="modalProps">
      <slot v-bind="modalProps" />
    </template>

    <template #footer="modalProps">
      <slot name="footer" v-bind="modalProps" />
    </template>
  </DModalContent>
</template>

<style lang="postcss" scoped></style>
