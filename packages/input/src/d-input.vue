<script lang="ts">
export default { inheritAttrs: false };
</script>
<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import { DBox } from '@daria/core';
import { DIcon } from '@daria/icon';
import { DFlex } from '@daria/layout';
import { randomIdProp } from '@daria/utils';
import config from './d-input.config';

interface Props {
  forwardRef?: any;
  colorScheme?: string;
  modelValue: string;
  leftIcon?: string;
  rightIcon?: string;
  id?: string;
  isInvalid?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: randomIdProp(),
  ...config.defaultProps
});

const attrs = useAttrs();

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emit('update:modelValue', val);
  }
});

const styleProps = computed(() => ({
  wrapper: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: props.isInvalid ? 'red.5' : 'grey.3',
    outline: 'solid 1px transparent',
    bg: props.disabled ? 'grey.1' : 'white',
    color: props.disabled ? 'grey.5' : 'black',
    align: 'center',
    overflow: 'hidden',
    transition: { outlineColor: 1, borderColor: 1 },
    ...config.getDerivedStyleProps(props)
  },
  input: {
    color: 'inherit',
    bg: 'inherit',
    p: 3,
    border: 'none',
    flexGrow: 1,
    focus: { outline: 'none' }
  },
  leftIcon: {
    ml: 3,
    pl: 2
  },
  rightIcon: { pl: 2, mr: 3 }
}));

const inputAttrs = computed(() =>
  Object.fromEntries(
    [
      'required',
      'min',
      'max',
      'minlength',
      'maxlength',
      'name',
      'pattern',
      'type',
      'step',
      'placeholder',
      'onFocus',
      'onBlur',
      'onChange',
      'onInput',
      'onInvalid'
    ].map(attr => [attr, attrs[attr]])
  )
);
</script>

<template>
  <DFlex gap="0" class="d-input" v-bind="{ ...$attrs, ...styleProps.wrapper }">
    <slot name="left">
      <DBox v-if="props.leftIcon" v-bind="styleProps.leftIcon">
        <DIcon :icon="props.leftIcon" />
      </DBox>
    </slot>
    <DBox
      :model-value="props.modelValue"
      v-model="vModel"
      is="input"
      :forward-ref="props.forwardRef"
      :id="props.id"
      :disabled="disabled"
      v-bind="{ ...inputAttrs, ...styleProps.input }"
    />

    <slot name="right">
      <DBox v-if="props.rightIcon" v-bind="styleProps.rightIcon">
        <DIcon :icon="props.rightIcon" />
      </DBox>
    </slot>
  </DFlex>
</template>

<style lang="postcss" scoped>
.d-input {
  input {
    &::placeholder {
      font-style: italic;
    }
  }
}
</style>
