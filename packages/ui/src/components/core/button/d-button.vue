<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { useColorScheme, useResponsiveProp } from '@/hooks';
import { vReadableColor } from '@/directives';
import { ResponsiveProp, StyleProp } from '@/utils';
import { VARIANT_SCHEMES } from './d-button.constants';

import { DBox, DIcon } from '@/components/core';

type ButtonVariant = 'full' | 'outlined' | 'ghost';

interface Props {
  colorScheme?: ResponsiveProp<string>;
  borderRadius?: StyleProp;
  variant?: ResponsiveProp<ButtonVariant>;
  isFullwidth?: ResponsiveProp<boolean>;
  isUppercase?: ResponsiveProp<boolean>;
  leftIcon?: ResponsiveProp<string>;
  rightIcon?: ResponsiveProp<string>;
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

const slots = useSlots();
const hasLeftIcon = computed(() => !!get(props.leftIcon) || slots.left);
const hasRightIcon = computed(() => !!get(props.rightIcon) || slots.right);
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
    <div class="d-button__icon-left" v-if="hasLeftIcon">
      <slot name="left">
        <DIcon :icon="leftIcon" />
      </slot>
    </div>

    <slot />

    <div v-if="hasRightIcon" class="d-button__icon-right">
      <slot name="right">
        <DIcon :icon="rightIcon" v-if="hasRightIcon" />
      </slot>
    </div>
  </DBox>
</template>

<style lang="postcss" scoped>
.d-button {
  cursor: pointer;
  border: solid 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-decoration: none;

  &[disabled] {
    opacity: 0.5;
    filter: saturate(50%);
    cursor: not-allowed;
  }
}

.d-button__icon-left {
  margin-right: var(--d-spacing-2);
  margin-left: calc(-1 * var(--d-spacing-1));
}

.d-button__icon-right {
  margin-left: var(--d-spacing-2);
  margin-right: calc(-1 * var(--d-spacing-1));
}

.d-button--is-fullwidth {
  width: 100%;

  .d-button__icon-left {
    margin-right: auto;
  }

  .d-button__icon-right {
    margin-left: auto;
  }
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
