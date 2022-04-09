<script setup lang="ts">
import { computed } from 'vue';
import { randomIdProp } from '@daria/utils';
import { DFlex } from '@daria/layout';
import DRadio from './d-radio.vue';
import config from './d-radio-group.config';

type RadioGroupOption = {
  label: string;
  value: any;
  disabled?: boolean;
};

interface Props {
  modelValue: any;
  values: RadioGroupOption[];
  colorScheme?: string;
  id?: string;
  isInvalid?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: randomIdProp(),
  isInvalid: false,
  disabled: false,
  ...config.defaultProps
});

const emit = defineEmits(['update:modelValue']);

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  }
});
</script>

<template>
  <DFlex gap="3" align="center">
    <DRadio
      v-for="(option, index) in props.values"
      :id="props.id + index"
      :key="props.id + index"
      v-model="vModel"
      :value="option.value"
      class="d-radio__radio"
      :colorScheme="props.colorScheme"
      :disabled="option.disabled ?? props.disabled"
      :is-invalid="props.isInvalid && props.modelValue === option.value"
    >
      {{ option.label }}
    </DRadio>
  </DFlex>
</template>
