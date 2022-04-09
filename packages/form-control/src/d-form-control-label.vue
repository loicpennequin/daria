<script lang="ts" setup>
import { computed } from 'vue';
import { useFormControl } from './use-form-control';
import { DBox } from '@daria/core';

interface Props {
  is?: string;
}

const props = withDefaults(defineProps<Props>(), {
  is: 'label'
});

const { required, disabled, id, colorScheme } = useFormControl();
const asteriskColor = computed(() => `var(--d-color-${colorScheme.value}-5)`);
</script>

<template>
  <DBox
    :is="props.is"
    :class="required && 'd-form-control-label--is-required'"
    display="block"
    :for="id"
    mb="1"
    :color="disabled ? 'grey.6' : 'black'"
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
  color: v-bind(asteriskColor);
}
</style>
