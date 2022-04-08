<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import { css } from '@emotion/css';
import { useStyleProps } from '../../composables/use-style-props';
import { STYLE_PROP_TYPES } from '../../constants/prop-types';

const props = defineProps({
  ...STYLE_PROP_TYPES,
  is: { type: String, default: 'div' },
  variants: { type: Object, default: () => ({}) },
  variant: { type: String, default: null },
  hover: { type: Object, default: () => {} },
  focus: { type: Object, default: () => {} },
  focusVisible: { type: Object, default: () => {} },
  focusWithin: { type: Object, default: () => {} },
  forwardRef: { type: null, default: null },
  modelValue: { type: null, default: 'foo' }
});
const emit =
  defineEmits<{
    (e: 'update:modelValue', value: any): void;
  }>();
const attrs = useAttrs();

const styles = useStyleProps(props);
const className = computed(() => css(styles.value));

const update = (event: any) => {
  emit(
    'update:modelValue',
    attrs.type === 'checkbox' ? event.target.checked : event.target.value
  );
};
</script>

<template>
  <component
    :is="props.is"
    :class="className"
    :ref="forwardRef"
    :value="modelValue"
    @input="update"
    @change="update"
  >
    <slot />
  </component>
</template>
