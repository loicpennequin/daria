<script lang="ts" setup>
import { ICONS } from '@/constants';
import { computed, inject } from 'vue';

interface Props {
  icon?: string;
  size?: string;
}

const props = defineProps<Props>();
const icons = inject<Record<string, any>>(ICONS);

const iconComponent = computed(() => (props.icon ? icons?.[props.icon] : null));
</script>

<template>
  <d-box :font-size="props.size" class="d-icon">
    <slot>
      <component :is="iconComponent" />
    </slot>
  </d-box>
</template>

<style lang="postcss" scoped>
.d-icon > * {
  width: 1em;
  height: 1em;
}
</style>
