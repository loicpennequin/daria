<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import { randomIdProp } from '@daria/utils';
import { DFlex } from '@daria/layout';
import { DIcon } from '@daria/icon';
import { DBox, vReadableColor } from '@daria/core';
import { isArray } from '@daria/utils';
import { DScaleFade } from '@daria/transitions';
import { merge } from 'lodash-es';
import config from './d-checkbox.config';

interface Props {
  modelValue: boolean | string | string[];
  id?: string;
  isInvalid?: boolean;
  disabled?: boolean;
  colorScheme?: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: randomIdProp(),
  ...config.defaultProps
});
const attrs = useAttrs();

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: any): void;
  }>();

const classes = computed(() => [props.disabled && 'd-checkbox--disabled']);

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(val: any) {
    if (isArray(props.modelValue)) {
      const newVal = props.modelValue.includes(attrs.value as string)
        ? props.modelValue.filter(v => v !== attrs.value)
        : props.modelValue.concat(attrs.value as string);

      return emit('update:modelValue', newVal);
    }
    emit('update:modelValue', val);
  }
});

const isChecked = computed(() => {
  console.log(props.modelValue);
  return isArray(props.modelValue)
    ? props.modelValue.includes(attrs.value as string)
    : !!props.modelValue;
});

const styleProps = computed(() =>
  merge(
    {
      root: {},

      wrapper: {
        position: 'relative',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'currentColor',
        w: '1em',
        h: '1em',
        borderRadius: 1,
        transition: { boxShadow: 2 },
        bg: 'white',

        focusWithin: {
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: 'black'
        }
      },

      input: {
        position: 'absolute',
        opacity: 0,
        margin: 0,
        width: '100%',
        height: '100%'
      },

      check: {
        transform: 'scale(1.2)',
        transition: 2,
        width: '100%',
        height: '100%'
      },

      label: {
        flex: 1,
        marginLeft: 2
      }
    },
    config.getDerivedStyleProps(props)
  )
);
</script>

<template>
  <DFlex gap="2" wrap="nowrap" :class="classes" v-bind="styleProps.root">
    <DBox v-bind="styleProps.wrapper">
      <DBox
        is="input"
        :id="props.id"
        v-model="vModel"
        class="d-checkbox__input"
        :disabled="props.disabled"
        type="checkbox"
        v-bind="{ ...$attrs, ...styleProps.input }"
      />
      <DScaleFade :is-visible="isChecked">
        <DIcon
          icon="checkbox"
          size="2"
          class="d-checkbox__check"
          v-bind="styleProps.check"
        />
      </DScaleFade>
    </DBox>
    <DBox
      v-if="$slots.default"
      is="label"
      :for="id"
      v-bind="styleProps.label"
      v-readable-color="true"
    >
      <slot />
    </DBox>
  </DFlex>
</template>

<style lang="postcss" scoped>
.d-checkbox__check {
  pointer-events: none;
  transform: scale(1.1) translate(-1px, -1px);
}

.d-checkbox__input {
  cursor: pointer;
}
</style>
