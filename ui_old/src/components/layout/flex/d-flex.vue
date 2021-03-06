<script setup lang="ts">
import { computed } from 'vue';
import {
  checkFlexGap,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  FlexWrap,
  ResponsiveProp
} from '@/utils';
import { useResponsiveProp } from '@/hooks';

import { DBox } from '@/components/core';

interface Props {
  direction?: ResponsiveProp<FlexDirection>;
  justify?: ResponsiveProp<FlexJustify>;
  align?: ResponsiveProp<FlexAlign>;
  wrap?: ResponsiveProp<FlexWrap>;
  isInline?: ResponsiveProp<boolean>;
  gap?: ResponsiveProp<string | number>;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
  wrap: 'nowrap',
  gap: 0,
  isInline: false
});

const isFlexboxGapSupported = checkFlexGap();

const get = useResponsiveProp();
const flexProps = computed(() => ({
  justify: get(props.justify, { isBoolean: true }),
  direction: get(props.direction, { isBoolean: true }),
  align: get(props.align, { isBoolean: true }),
  wrap: get(props.wrap, { isBoolean: true }),
  display: get(props.isInline, { isBoolean: true }) ? 'inline-flex' : 'flex'
}));

const classes = computed(() =>
  isFlexboxGapSupported
    ? []
    : [
        ['row', 'row-reverse'].includes(get(props.direction)) &&
          'd-flex--safari-gap-fix-horizontal',

        ['column', 'column-reverse'].includes(get(props.direction)) &&
          'd-flex--safari-gap-fix-vertical'
      ]
);
</script>

<template>
  <DBox class="d-flex" :class="classes" :gap="props.gap">
    <slot />
  </DBox>
</template>

<style lang="scss" scoped>
.d-flex {
  display: v-bind('flexProps.display');
  flex-direction: v-bind('flexProps.direction');
  justify-content: v-bind('flexProps.justify');
  align-items: v-bind('flexProps.align');
  flex-wrap: v-bind('flexProps.wrap');
}

.d-flex--safari-gap-fix-horizontal > * + * {
  margin-left: v-bind('gap');
}
.d-flex--safari-gap-fix-vertical > * + * {
  margin-top: v-bind('gap');
}
</style>
