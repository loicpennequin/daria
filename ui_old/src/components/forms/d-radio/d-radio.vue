<script setup lang="ts">
import { useColorScheme } from '@/hooks';
import { getDefaultProp, randomIdProp } from '@/utils';
import { nanoid } from 'nanoid';
import { computed, toRef } from 'vue';
import { DFlex } from '@/components/layout';

interface Props {
  modelValue: any;
  value: any;
  colorScheme?: string;
  id?: string;
  isInvalid?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: randomIdProp(),
  colorScheme: getDefaultProp<string>('DRadio.colorScheme'),
  isInvalid: false,
  disabled: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const classes = computed(() => [
  props.disabled && 'd-radio--disabled',
  props.isInvalid && 'd-radio--is-invalid'
]);
const scheme = useColorScheme({ normal: 5 }, toRef(props, 'colorScheme'));

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(val: any) {
    emit('update:modelValue', val);
  }
});
</script>

<template>
  <div class="d-radio" :class="classes">
    <DFlex align="center" justify="center" mr="2" class="d-input">
      <input
        :id="id"
        type="radio"
        :value="value"
        v-model="vModel"
        :disabled="disabled"
      />
      <d-icon
        icon="radioUnchecked"
        class="d-input__inner"
        :transition="{ boxShadow: 2, outline: 2 }"
        border-radius="circle"
      />
      <d-icon
        icon="radioChecked"
        class="d-input__inner--checked"
        transition="2"
      />
    </DFlex>
    <label :for="id" class="d-radio__label"><slot /></label>
  </div>
</template>

<style lang="scss" scoped>
.d-radio--disabled {
  color: var(--d-color-grey-5);
  .d-input {
    cursor: default;
  }
}

.d-radio--is-invalid {
  .d-input,
  .d-input__inner--checked {
    color: var(--d-color-red-5);
  }
}

.d-radio {
  display: inline-flex;
  align-items: center;
}

.d-input {
  position: relative;
  cursor: pointer;

  * {
    cursor: inherit;
  }
}

input {
  position: absolute;
  opacity: 0;
  margin: 0;

  &:focus ~ .d-input__inner,
  &:focus ~ .d-input__inner {
    outline: solid 2px v-bind('scheme.normal');
    color: v-bind('scheme.normal');
  }

  &:checked ~ .d-input__inner--checked {
    transform: scale(0.5);
  }
}

.d-input_inner {
  pointer-events: none;
}

.d-input__inner--checked {
  color: v-bind('scheme.normal');
  pointer-events: none;
  position: absolute;
  transform: scale(0);
}
</style>
