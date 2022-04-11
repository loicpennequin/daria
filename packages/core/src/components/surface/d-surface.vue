<script setup lang="ts">
import { StyleProp } from '@daria/theme';
import { DBox } from '../box';
import config from './d-surface.config';
import { vReadableColor } from '../../directives/readable-color';

interface Props {
  bg?: StyleProp;
  color?: StyleProp;
}

const props = withDefaults(defineProps<Props>(), { ...config.defaultProps });
</script>

<template>
  <DBox :bg="props.bg" :color="props.color" :p="4" v-readable-color="true">
    <slot />
  </DBox>
</template>
