<script setup lang="ts">
import { computed } from 'vue';
import { checkFlexGap } from '@/utils';
import { useStyleProps } from '@/hooks';

interface Props {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  wrap?: 'wrap' | 'nowrap';
  gap?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
  wrap: 'wrap',
  gap: 0
});

const isFlexboxGapSupported = checkFlexGap();

const styleProps = useStyleProps(props);
const classes = computed(() =>
  isFlexboxGapSupported
    ? []
    : [
        ['row', 'row-reverse'].includes(props.direction) &&
          'd-flex--safari-gap-fix-horizontal',

        ['column', 'column-reverse'].includes(props.direction) &&
          'd-flex--safari-gap-fix-vertical'
      ]
);
</script>

<template>
  <d-box class="d-flex" :class="classes">
    <slot />
  </d-box>
</template>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  flex-direction: v-bind('props.direction');
  justify-content: v-bind('props.justify');
  align-items: v-bind('props.align');
  flex-wrap: v-bind('props.wrap');
  gap: v-bind('styleProps.gap');
}

.d-flex--safari-gap-fix-horizontal > * + * {
  margin-left: v-bind('gap');
}
.d-flex--safari-gap-fix-vertical > * + * {
  margin-top: v-bind('gap');
}
</style>
