<script lang="ts" setup>
import { StyleProp, useIcons } from '@daria/theme';
import { computed } from 'vue';
import { DBox } from '@daria/core';

interface Props {
  icon: string;
  size?: StyleProp;
}

const props = withDefaults(defineProps<Props>(), {
  size: 2
});

const icons = useIcons();

const iconComponent = computed(() => icons?.[props.icon] ?? null);
</script>

<template>
  <DBox class="d-icon" :size="props.size">
    <component :is="iconComponent" />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-icon > * {
  width: 100%;
  height: 100%;
}
</style>
