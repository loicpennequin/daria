<script setup lang="ts">
import { useResponsiveProp } from '@/hooks';
import { isNumber, ResponsiveProp } from '@/utils';
import { computed } from 'vue';

import { DBox } from '@/components/core';

interface Props {
  columns: ResponsiveProp<number | string>;
  rows?: ResponsiveProp<number | string>;
  gap?: ResponsiveProp<number | string>;
  justify?:
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
}

const props = withDefaults(defineProps<Props>(), {
  justify: 'normal',
  align: 'stretch',
  gap: 0
});

const get = useResponsiveProp();
const gridTemplate = computed(() => {
  const columns = get(props.columns);
  const rows = get(props.rows);

  return {
    columns: isNumber(columns) ? `repeat(${columns}, minmax(0, 1fr))` : columns,
    rows: isNumber(rows) ? `repeat(${rows}, minmax(0, 1fr))` : rows
  };
});
</script>

<template>
  <DBox class="d-grid" :gap="gap">
    <slot />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-grid {
  display: grid;
  grid-template-columns: v-bind('gridTemplate.columns');
  grid-template-rows: v-bind('gridTemplate.rows');
  justify-items: v-bind(justify);
  align-items: v-bind(align);
}
</style>
