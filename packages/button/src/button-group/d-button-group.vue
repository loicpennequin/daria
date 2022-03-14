<script setup lang="ts">
import { computed } from 'vue';
import { DFlex } from '@daria/layout';

interface Props {
  isRounded?: boolean;
  isAttached?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isRounded: false,
  isAttached: false
});

const classes = computed(() => [
  props.isRounded && 'd-button-group--is-rounded',
  props.isAttached && 'd-button-group--is-attached'
]);
</script>

<template>
  <DFlex :class="classes">
    <slot />
  </DFlex>
</template>

<style lang="postcss" scoped>
.d-button-group--is-attached {
  > :deep(button):not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  > :deep(button):first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  > :deep(button):last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  > :deep(button):not(:last-child) {
    border-right-color: transparent;
  }
}

.d-button-group--is-rounded {
  > :deep(button):first-child {
    border-top-left-radius: var(--d-radii-pill);
    border-bottom-left-radius: var(--d-radii-pill);
  }
  > :deep(button):last-child {
    border-top-right-radius: var(--d-radii-pill);
    border-bottom-right-radius: var(--d-radii-pill);
  }
}
</style>
