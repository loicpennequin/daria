<script lang="ts" setup>
import { useFormControl } from './use-form-control';
import { DBox } from '@/components/core';
import { useColorScheme } from '@/hooks';

interface Props {
  fontSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  fontSize: 2
});
const { colorScheme } = useFormControl();

const scheme = useColorScheme({ text: 6 }, { colorScheme });
</script>

<template>
  <DBox class="d-form-control-hint" :font-size="props.fontSize" my="2">
    <slot />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-form-control-hint {
  color: v-bind('scheme.text');
}
</style>
