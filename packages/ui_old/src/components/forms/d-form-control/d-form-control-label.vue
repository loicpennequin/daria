<script lang="ts" setup>
import { useFormControl } from './use-form-control';
import { DBox } from '@/components/core';
import { StyleProp } from '@/utils';
import { useColorScheme } from '@/hooks';

interface Props {
  is?: string;
  fontWeight?: StyleProp;
}

const props = withDefaults(defineProps<Props>(), {
  is: 'label',
  fontWeight: 'semibold'
});
const { required, disabled, id, colorScheme } = useFormControl();

const scheme = useColorScheme({ asterisk: 5 }, colorScheme);
</script>

<template>
  <DBox
    class="d-form-control-label"
    :class="required && 'd-form-control-label--is-required'"
    :is="props.is"
    :for="id"
    mb="1"
    :font-weight="props.fontWeight"
    :color="disabled ? 'grey-6' : 'black'"
  >
    <slot />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-form-control-label {
  display: block;
}

.d-form-control-label--is-required::after {
  content: ' *';
  color: v-bind('scheme.asterisk');
}
</style>
