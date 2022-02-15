<script lang="ts" setup>
import { computed, provide, toRef } from 'vue';
import { nanoid } from 'nanoid';
import { DBox } from '@/components/core';
import { FORM_CONTROL_INJECTION_KEY } from '@/constants';
import { useResponsiveProp } from '@/hooks';
import { FormControlContext } from './d-form-control.types';

interface Props {
  id?: string;
  colorScheme?: string;
  required?: boolean;
  disabled?: boolean;
  isInvalid?: boolean;
}

const props = withDefaults<
  Props,
  {
    id: string;
    required: boolean;
    isInvalid: boolean;
    colorScheme: string;
    disabled: boolean;
  }
>(defineProps<Props>(), {
  // @ts-ignore
  id: () => nanoid(),
  colorScheme: 'grey',
  required: false,
  isInvalid: false,
  disabled: false
});

const get = useResponsiveProp();

const formControl: FormControlContext = {
  id: toRef(props, 'id'),
  required: toRef(props, 'required'),
  isInvalid: toRef(props, 'isInvalid'),
  disabled: toRef(props, 'disabled'),
  colorScheme: toRef(props, 'colorScheme')
};
provide(FORM_CONTROL_INJECTION_KEY, formControl);

const slotProps = computed(() => ({
  id: props.id,
  required: props.required,
  disabled: props.disabled,
  isInvalid: props.isInvalid,
  colorScheme: get(props.colorScheme)
}));
</script>

<template>
  <DBox class="d-form-control">
    <slot v-bind="slotProps" />
  </DBox>
</template>
