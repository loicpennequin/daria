<script setup lang="ts">
import { StyleProp } from '@daria/theme';

import { DBox } from '@daria/core';

interface Props {
  column?: StyleProp;
  row?: StyleProp;
}
const props = withDefaults(defineProps<Props>(), {
  column: 'auto',
  row: 'auto'
});
</script>

<template>
  <DBox :grid-row="props.row" :grid-column="props.column">
    <slot />
  </DBox>
</template>
