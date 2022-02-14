<script setup lang="ts">
import { DBox } from '@/components/core';
import { StyleProp } from '@/utils';

interface Props {
  p?: StyleProp;
  bg?: StyleProp;
}

const props = withDefaults(defineProps<Props>(), { p: 4, bg: 'grey-0' });
</script>

<template>
  <DBox :bg="props.bg" :p="props.p" class="d-surface">
    <slot />
  </DBox>
</template>
