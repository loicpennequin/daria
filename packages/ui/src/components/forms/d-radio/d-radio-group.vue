<script setup lang="ts">
import { computed } from 'vue';
import { nanoid } from 'nanoid';
import { getDefaultProp, randomIdProp } from '@/utils';
import { DFlex } from '@/components/layout';
import DRadio from './d-radio.vue';

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
  isRow?: boolean;
  isInvalid?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: randomIdProp(),
  colorScheme: getDefaultProp<string>('DRadio.colorScheme'),
  isRow: false,
  isInvalid: false,
  disabled: false
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

const direction = computed(() => (props.isRow ? 'row' : 'column'));
</script>

<template>
  <div class="d-radio-group">
    <DFlex :direction="direction" gap="1">
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
  </div>
</template>

<style lang="scss" scoped>
.radio {
  &:not(:last-of-type) {
    margin-right: var(--d-spacing--3);
  }
}
</style>
