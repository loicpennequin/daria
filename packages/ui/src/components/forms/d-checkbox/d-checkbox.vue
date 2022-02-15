<script lang="ts" setup>
import { computed, toRef } from 'vue';
import { useColorScheme } from '@/hooks';
import { getDefaultProp, randomIdProp } from '@/utils';

import { DFlex } from '@/components/layout';

interface Props {
  modelValue: boolean | string | string[];
  colorScheme?: string;
  id?: string;
  isInvalid?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: randomIdProp(),
  colorScheme: getDefaultProp<string>('DCheckbox.colorScheme')
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const classes = computed(() => [props.disabled && 'd-checkbox--disabled']);
const scheme = useColorScheme(
  { normal: 5, focus: 7 },
  toRef(props, 'colorScheme')
);

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
  <DFlex gap="2" class="d-checkbox" :class="classes">
    <div class="d-checkbox__input-wrapper">
      <input
        :id="props.id"
        v-model="vModel"
        class="d-checkbox__input"
        :disabled="props.disabled"
        type="checkbox"
        v-bind="$attrs"
      />
      <d-icon icon="checkbox" size="md" class="d-checkbox__check" />
    </div>
    <label v-if="$slots.default" :for="id" class="d-checkbox__label">
      <slot />
    </label>
  </DFlex>
</template>

<style lang="postcss" scoped>
.d-checkbox {
  display: flex;
  flex-wrap: nowrap;
  --checkbox-color: v-bind('scheme.normal');

  &:focus-within {
    --checkbox-color: v-bind('scheme.focus');
  }
}

.d-checkbox__input {
  cursor: pointer;
}

.d-checkbox--disabled {
  .d-checkbox__input-wrapper {
    border-color: var(--d-color-grey-5);
  }

  .d-checkbox__label {
    color: var(--d-color-grey-5);
  }

  .d-checkbox__check {
    color: var(--d-color-grey-3);
  }
}

.d-checkbox__input-wrapper {
  position: relative;
  border: solid 1px var(--checkbox-color);
  width: 1em;
  height: 1em;
  border-radius: var(--d-border-radius-1);
  transition: box-shadow var(--d-transition-2);
  background: var(--d-color-white);

  &:focus-within {
    outline: solid 1px var(--checkbox-color);
  }
}

.d-checkbox__label {
  flex: 1;
  margin-left: var(--d--spacing-2);
}
.d-checkbox__check {
  color: var(--checkbox-color);
  pointer-events: none;
  transform: scale(0);
  transition: all var(--d-transition-2);
  width: 100% !important;
  height: 100% !important;
  cursor: pointer;
}

.d-checkbox__input {
  position: absolute;
  opacity: 0;
  margin: 0;
  width: 100%;
  height: 100%;

  &:checked ~ .d-checkbox__check {
    transform: scale(1.2) translate(-0.5px, -0.5px);
  }
}
</style>
