<script setup lang="ts">
import { computed } from 'vue';
import { isNumber, isArray } from '@daria/utils';
import { StyleProp } from '@daria/theme';
import { DBox } from '@daria/core';

interface Props {
  columns?: StyleProp;
  rows?: StyleProp;
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
  rows: 'auto',
  columns: 'auto'
});

const getTemplate = (value: string | number) =>
  isNumber(value) ? `repeat(${value}, minmax(0, 1fr))` : value;

const gridTemplate = computed(() => {
  const { columns, rows } = props;

  return {
    gridTemplateColumns: isArray<string | number>(columns)
      ? // @ts-ignore
        columns.map(getTemplate)
      : getTemplate(columns),
    gridTemplateRows: isArray<string | number>(rows)
      ? // @ts-ignore
        rows.map(getTemplate)
      : getTemplate(rows)
  };
});
</script>

<template>
  <DBox
    v-bind="gridTemplate"
    display="grid"
    :justify-items="props.justify"
    :align-items="props.align"
  >
    <slot />
  </DBox>
</template>
