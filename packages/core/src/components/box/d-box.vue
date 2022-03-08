<script lang="ts" setup>
import { computed } from 'vue';
import { css } from '@emotion/css';
import { useStyleProps } from '../../composables/use-style-props';
import { STYLE_PROP_TYPES } from '../../constants/prop-types';

const props = defineProps({
  ...STYLE_PROP_TYPES,
  is: { type: String, default: 'div' },
  hover: { type: Object, default: () => {} },
  focus: { type: Object, default: () => {} },
  focusVisible: { type: Object, default: () => {} },
  forwardRef: { type: null, default: null }
});

const styles = useStyleProps(props);
const className = computed(() => css(styles.value));
</script>

<template>
  <component :is="props.is" :class="className" :ref="forwardRef">
    <slot />
  </component>
</template>
