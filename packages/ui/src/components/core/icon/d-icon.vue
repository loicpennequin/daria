<script lang="ts" setup>
import { ICONS_INJECTION_KEY } from '@/constants';
import { computed, inject } from 'vue';
import { useResponsiveProp } from '@/hooks';
import { ResponsiveProp } from '@/utils';

import { DBox } from '@/components/core';

interface Props {
  icon?: ResponsiveProp<string>;
  size?: ResponsiveProp<string>;
}

const props = defineProps<Props>();
const icons = inject<Record<string, any>>(ICONS_INJECTION_KEY);

const get = useResponsiveProp();
const iconComponent = computed(() => {
  const value = get(props.icon);

  return value ? icons?.[value] : null;
});
</script>

<template>
  <DBox :font-size="get(props.size)" class="d-icon">
    <slot>
      <component :is="iconComponent" />
    </slot>
  </DBox>
</template>

<style lang="postcss" scoped>
.d-icon > * {
  width: 1em;
  height: 1em;
}
</style>
