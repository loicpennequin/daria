<script setup lang="ts">
import { DBox } from '../box';
import { StyleProp, useDefaultProp, StylePropDefault } from '@daria/theme';

interface Props {
  bg?: StyleProp;
  color?: StyleProp;
}

const props = withDefaults(defineProps<Props>(), {
  bg: useDefaultProp<StylePropDefault>('DSurface.bg'),
  color: useDefaultProp<StylePropDefault>('DSurface.color')
});
</script>

<template>
  <DBox :bg="props.bg" :color="props.color" :p="3">
    <slot />
  </DBox>
</template>
