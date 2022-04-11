<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import { useTabs } from './use-tabs';
import { DBox } from '@daria/core';

interface Props {
  name: string;
  label: string;
}

const props = defineProps<Props>();
const { add, remove, isActive, isLazy } = useTabs();

const tab = {
  name: props.name,
  label: props.label
};

add(tab);

onUnmounted(() => {
  remove(tab);
});
</script>

<template>
  <DBox v-show="isActive(tab)" v-if="!isLazy || isActive(tab)">
    <slot />
  </DBox>
</template>
