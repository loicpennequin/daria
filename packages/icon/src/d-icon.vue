<script lang="ts" setup>
import { useIcons } from '@daria/theme';
import { computed } from 'vue';
import { DBox } from '@daria/core';

interface Props {
  icon: string;
}

const props = defineProps<Props>();

const icons = useIcons();

const iconComponent = computed(() => icons?.[props.icon] ?? null);
</script>

<template>
  <DBox class="d-icon">
    <component :is="iconComponent" />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-icon > * {
  width: 1em;
  height: 1em;
}
</style>
