<script setup lang="ts">
import { useResponsiveProp } from '@/hooks';
import { ResponsiveProp } from '@/utils';
import { computed } from 'vue';

interface Props {
  column?: ResponsiveProp<number | string>;
  row?: ResponsiveProp<number | string>;
}
const props = defineProps<Props>();

const get = useResponsiveProp();
const style = computed(() => ({
  column: get(props.column) || 'auto',
  row: get(props.row) || 'auto'
}));
</script>

<template>
  <d-box class="d-grid-item">
    <slot />
  </d-box>
</template>

<style lang="scss" scoped>
.d-grid-item {
  grid-column: v-bind('style.column');
  grid-row: v-bind('style.column');
}
</style>
