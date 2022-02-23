<script setup lang="ts">
import { computed } from 'vue';

import { DBox } from '@/components/core';

interface Props {
  isSmall?: boolean;
  isLarge?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isSmall: false,
  isLarge: false
});

const classes = computed(() => ({
  'd-container--is-small': props.isSmall,
  'd-container--is-large': props.isLarge
}));
</script>

<template>
  <DBox class="d-container" :class="classes">
    <slot />
  </DBox>
</template>

<style lang="scss" scoped>
.d-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--d-breakpoint-tablet);

  &.d-container--is-small {
    max-width: var(--d-breakpoint-mobile);
  }

  &.d-container--is-large {
    max-width: 1200px;
  }
}
</style>
