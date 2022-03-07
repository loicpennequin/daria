<script setup lang="ts">
import { DBox } from '../box';
import { StyleProp } from '@daria/theme';

interface Props {
  justify?: StyleProp;
  align?: StyleProp;
  direction?: StyleProp;
  wrap?: StyleProp;
  isInline?: boolean;
}

const props = withDefaults(defineProps<Props>(), { isInline: false });
</script>

<template>
  <DBox
    :display="props.isInline ? 'inline-flex' : 'flex'"
    :justify-content="props.justify"
    :align-items="props.align"
    :flex-direction="props.direction"
    :flex-wrap="props.wrap"
  >
    <slot />
  </DBox>
</template>
