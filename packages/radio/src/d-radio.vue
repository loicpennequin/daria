<script setup lang="ts">
import { randomIdProp } from '@daria/utils';
import { computed } from 'vue';
import { DFlex, DVisuallyHidden } from '@daria/layout';
import { DIcon } from '@daria/icon';
import config from './d-radio.config';
import { merge } from 'lodash-es';

interface Props {
  modelValue: any;
  value: any;
  colorScheme?: string;
  id?: string;
  isInvalid?: boolean;
  disabled?: boolean;
  isInline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: randomIdProp(),
  isInvalid: false,
  disabled: false,
  isInline: true,
  ...config.defaultProps
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: any): void;
  }>();

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(val: any) {
    emit('update:modelValue', val);
  }
});

const isChecked = computed(() => {
  return props.modelValue === props.value;
});

const styleProps = computed(() =>
  merge(
    {
      wrapper: {
        align: 'center',
        gap: 3
      },

      checkWrapper: {
        w: '1em',
        h: '1em',
        align: 'center',
        justify: 'center',
        bg: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: 'circle',
        focusWithin: {
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: 'black'
        }
      },

      check: {
        transform: `scale(${isChecked.value ? 0.6 : 0})`,
        transition: { transform: 2 }
      }
    },
    config.getDerivedStyleProps(props)
  )
);
</script>

<template>
  <DFlex
    class="d-input"
    v-bind="styleProps.wrapper"
    :for="id"
    is="label"
    :is-inline="props.isInline"
  >
    <DFlex v-bind="styleProps.checkWrapper">
      <DVisuallyHidden>
        <input
          :id="id"
          type="radio"
          :value="props.value"
          v-model="vModel"
          :disabled="disabled"
        />
      </DVisuallyHidden>
      <DIcon icon="radioChecked" v-bind="styleProps.check" />
    </DFlex>

    <slot />
  </DFlex>
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

.d-input {
  cursor: pointer;

  * {
    cursor: inherit;
  }
}
</style>
