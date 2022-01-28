<script setup lang="ts">
import { computed } from 'vue';
import { useColorScheme, useResponsiveProp } from '@/hooks';
import { vReadableColor } from '@/directives';
import { ResponsiveProp, StyleProp } from '@/utils';
import { VARIANT_SCHEMES } from './d-button.constants';

import { DBox } from '@/components/box';

type ButtonVariant = 'full' | 'outlined' | 'ghost';

interface Props {
  colorScheme?: ResponsiveProp<string>;
  borderRadius?: StyleProp;
  variant?: ResponsiveProp<ButtonVariant>;
  isFullwidth?: ResponsiveProp<boolean>;
  isUppercase?: ResponsiveProp<boolean>;
}

const props = withDefaults(defineProps<Props>(), {
  colorScheme: 'grey',
  borderRadius: 3,
  variant: 'full',
  isFullwidth: false,
  isUppercase: false
});

const get = useResponsiveProp();
const scheme = useColorScheme(
  computed(() => VARIANT_SCHEMES[get<ButtonVariant>(props.variant)]),
  props
);
const classes = computed(() => [
  `d-button--${get(props.variant)}`,
  get<boolean>(props.isFullwidth, { isBoolean: true }) &&
    'd-button--is-fullwidth',
  get<boolean>(props.isUppercase, { isBoolean: true }) &&
    'd-button--is-uppercase'
]);
</script>

<template>
  <DBox
    is="button"
    :border-radius="borderRadius"
    px="3"
    py="1"
    font-weight="semibold"
    class="d-button"
    :class="classes"
    v-readable-color="variant === 'full'"
  >
    <slot />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-button {
  cursor: pointer;
  border: solid 1px;

  &[disabled] {
    opacity: 0.5;
    filter: saturate(50%);
    cursor: not-allowed;
  }
}

.d-button--is-fullwidth {
  width: 100%;
}

.d-button--is-uppercase {
  text-transform: uppercase;
}

.d-button--full {
  --d-button-color: v-bind('scheme.normal');
  background-color: var(--d-button-color);
  border-color: var(--d-button-color);

  &:not([disabled]) {
    &:hover {
      --d-button-color: v-bind('scheme.hover');
    }

    &:focus-visible {
      --d-button-color: v-bind('scheme.focus');
    }

    &:active {
      --d-button-color: v-bind('scheme.active');
    }
  }
}

.d-button--outlined {
  --d-button-color: v-bind('scheme.normal');
  border: solid 2px var(--d-button-color);
  color: var(--d-button-color);

  &:not([disabled]) {
    &:hover {
      background-color: v-bind('scheme.hover');
    }

    &:focus-visible {
      --d-button-color: v-bind('scheme.focus');
      background-color: v-bind('scheme.hover');
      outline: none;
    }

    &:active {
      --d-button-color: v-bind('scheme.active');
    }
  }
}

.d-button--ghost {
  border-color: transparent;
  background-color: transparent;
  color: v-bind('scheme.normal');

  &:not([disabled]) {
    &:hover {
      background: v-bind('scheme.hover');
    }

    &:focus-visible {
      color: v-bind('scheme.focus');
      outline: solid 2px v-bind('scheme.focus');
    }

    &:active {
      color: v-bind('scheme.active');
    }
  }
}
</style>
