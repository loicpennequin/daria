<script setup lang="ts">
import { useResponsiveProp } from '@/hooks';
import { ResponsiveProp } from '@/utils';
import { computed } from 'vue';

import { DFlex } from '@/components/layout';

interface Props {
  isAttached?: ResponsiveProp<boolean>;
  isRounded?: ResponsiveProp<boolean>;
}

const props = withDefaults(defineProps<Props>(), {
  isAttached: false,
  isRounded: false
});
const get = useResponsiveProp();

const classes = computed(() => [
  get<boolean>(props.isRounded, { isBoolean: true }) &&
    'd-button-group--is-rounded',
  get<boolean>(props.isAttached, { isBoolean: true }) &&
    'd-button-group--is-attached'
]);

const gap = computed(() =>
  get<boolean>(props.isAttached, { isBoolean: true }) ? 0 : 2
);
</script>
<template>
  <DFlex :gap="gap" class="d-button-group" :class="classes">
    <slot />
  </DFlex>
</template>

<style lang="postcss" scoped>
.d-button-group {
  &.d-button-group--is-rounded {
    &:deep(.d-button:first-child) {
      border-top-left-radius: var(--d-radius-pill);
      border-bottom-left-radius: var(--d-radius-pill);
    }
    &:deep(.d-button:last-child) {
      border-top-right-radius: var(--d-radius-pill);
      border-bottom-right-radius: var(--d-radius-pill);
    }
    &:deep(.d-button:not(:first-child):not(:last-child)) {
      border-radius: 0;
    }
  }
  &.d-button-group--is-attached {
    &:deep(.d-button:not(:first-child)) {
      margin-left: -1px;
    }
  }
}
</style>
