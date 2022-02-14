<script lang="ts" setup>
import { computed, provide } from 'vue';
import { nanoid } from 'nanoid';
import { DBox } from '@/components/core';
import { FORM_CONTROL_INJECTION_KEY } from '@/constants';
import { ResponsiveProp } from '@/utils';
import { useResponsiveProp } from '@/hooks';

interface Props {
  id?: string;
  colorScheme?: ResponsiveProp<string>;
  required?: boolean;
  isInvalid?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  // @ts-ignore
  id: () => nanoid(),
  colorScheme: 'grey',
  required: false
});

const get = useResponsiveProp();

const formControl = computed(() => ({
  id: props.id,
  colorScheme: get(props.colorScheme),
  required: props.required,
  isInvalid: props.isInvalid
}));
provide(FORM_CONTROL_INJECTION_KEY, formControl);

const slotProps = computed(() => ({
  ...formControl.value
}));
</script>

<template>
  <DBox class="d-form-control">
    <slot v-bind="slotProps" />
  </DBox>
</template>
