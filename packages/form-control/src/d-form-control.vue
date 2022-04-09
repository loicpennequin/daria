<script lang="ts" setup>
import { computed, provide, toRef } from 'vue';
import { DBox } from '@daria/core';
import { FORM_CONTROL_INJECTION_KEY } from './constants';
import { FormControlContext } from './d-form-control.types';
import { randomIdProp } from '@daria/utils';
import config from './d-form-control.config';

interface Props {
  id?: string;
  colorScheme?: string;
  required?: boolean;
  disabled?: boolean;
  isInvalid?: boolean;
}

const props = withDefaults<Props, Required<Props>>(defineProps<Props>(), {
  id: randomIdProp(),
  required: false,
  isInvalid: false,
  disabled: false,
  ...config.defaultProps
});

const colorScheme = computed(() =>
  props.isInvalid ? 'red' : props.colorScheme
);

const formControl: FormControlContext = {
  id: toRef(props, 'id'),
  required: toRef(props, 'required'),
  isInvalid: toRef(props, 'isInvalid'),
  disabled: toRef(props, 'disabled'),
  colorScheme: colorScheme
};
provide(FORM_CONTROL_INJECTION_KEY, formControl);

const slotProps = computed(() => ({
  id: props.id,
  required: props.required,
  disabled: props.disabled,
  isInvalid: props.isInvalid,
  colorScheme: props.isInvalid ? 'red' : props.colorScheme
}));
</script>

<template>
  <DBox>
    <slot v-bind="slotProps" />
  </DBox>
</template>
