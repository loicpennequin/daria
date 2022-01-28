<script lang="ts" setup>
import { ICONS_INJECTION_KEY } from '@/constants';
import { computed, inject } from 'vue';
import { DBox } from '@/components/box';

interface Props {
  icon?: string;
  size?: string;
}

const props = defineProps<Props>();
const icons = inject<Record<string, any>>(ICONS_INJECTION_KEY);

const iconComponent = computed(() => (props.icon ? icons?.[props.icon] : null));
</script>

<template>
  <DBox :font-size="props.size" class="d-icon">
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
