<script lang="ts" setup>
import { DBox, DSurface } from '@daria/core';
import { DFlex } from '@daria/layout';
import { DIcon } from '@daria/icon';
import { useAccordionToggle } from './use-accordion-toggle';

interface Props {
  label?: string;
}

const props = defineProps<Props>();

const { index, colorScheme, isOpened, toggle, open, close } =
  useAccordionToggle();

const slotProps = {
  index,
  isOpened,
  toggle,
  open,
  close
};
</script>

<template>
  <DSurface p="0">
    <DFlex
      justify="space-around"
      is="button"
      is-fullwidth
      text-align="left"
      bg="transparent"
      w="100%"
      border-radius="0"
      border="none"
      p="4"
      color="black"
      :color-scheme="colorScheme"
      @click="toggle"
    >
      <DBox is="span" mr="auto">
        <slot v-bind="slotProps">
          {{ props.label }}
        </slot>
      </DBox>

      <DIcon
        icon="chevronDown"
        :transition="2"
        :transform="isOpened ? 'rotateZ(-0.5turn)' : 'none'"
      />
    </DFlex>
  </DSurface>
</template>
