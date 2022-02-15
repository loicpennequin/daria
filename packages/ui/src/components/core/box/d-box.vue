<script setup lang="ts">
import { watch, ref, inject, provide, onMounted, computed, unref } from 'vue';
import { mergeWith } from 'lodash-es';
import { useStyleProps } from '@/hooks';
import {
  StyleProp,
  isNotNil,
  upperCaseFirstLetter,
  isNil,
  ResponsiveProp,
  camelToKebabCase
} from '@/utils';
import { checkedProps } from './d-box.contants';

interface Props {
  is?: any;
  shadow?: StyleProp;
  fontFamily?: StyleProp;
  fontSize?: StyleProp;
  fontWeight?: StyleProp;
  margin?: StyleProp;
  m?: StyleProp;
  marginX?: StyleProp;
  mx?: StyleProp;
  marginY?: StyleProp;
  my?: StyleProp;
  marginTop?: StyleProp;
  mt?: StyleProp;
  marginBottom?: StyleProp;
  mb?: StyleProp;
  marginLeft?: StyleProp;
  ml?: StyleProp;
  marginRight?: StyleProp;
  mr?: StyleProp;
  padding?: StyleProp;
  p?: StyleProp;
  paddingX?: StyleProp;
  px?: StyleProp;
  paddingY?: StyleProp;
  py?: StyleProp;
  paddingTop?: StyleProp;
  pt?: StyleProp;
  paddingBottom?: StyleProp;
  pb?: StyleProp;
  paddingLeft?: StyleProp;
  pl?: StyleProp;
  paddingRight?: StyleProp;
  pr?: StyleProp;
  background?: StyleProp;
  bg?: StyleProp;
  color?: StyleProp;
  borderColor?: StyleProp;
  borderRadius?: StyleProp;
  transition?: ResponsiveProp<number | { [key: string]: number }>;
  forwardRef?: (el: any) => void;
}
const props = withDefaults(defineProps<Props>(), {
  is: 'div'
});

const styleProps = useStyleProps(props);

const element = ref<any>(null);
const elementRef = (el: any) => {
  element.value = el;
  props.forwardRef?.(el);
};

const hasClass = (property: keyof typeof styleProps.value) =>
  !!styleProps.value[property];

const dBoxAttr = computed(() =>
  checkedProps.filter(hasClass).map(camelToKebabCase).join(' ')
);
</script>

<template>
  <component :ref="elementRef" :is="is" class="d-box" :data-d-box="dBoxAttr">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.d-box {
  font-family: v-bind('styleProps.fontFamily');
  transition: v-bind('styleProps.transition');

  &:where([data-d-box*='font-size']) {
    font-size: v-bind('styleProps.fontSize');
  }

  &:where([data-d-box*='bg']) {
    background-color: v-bind('styleProps.bg');
  }

  &:where([data-d-box*='color']) {
    color: v-bind('styleProps.color');
  }

  &:where([data-d-box*='border-color']) {
    border-color: v-bind('styleProps.borderColor');
  }

  &:where([data-d-box*='padding']) {
    padding: v-bind('styleProps.padding');
  }

  &:where([data-d-box*='margin']) {
    margin: v-bind('styleProps.margin');
  }

  &:where([data-d-box*='border-radius']) {
    border-radius: v-bind('styleProps.borderRadius');
  }

  &:where([data-d-box*='font-weight']) {
    font-weight: v-bind('styleProps.fontWeight');
  }

  &:where([data-d-box*='shadow']) {
    box-shadow: v-bind('styleProps.shadow');
  }
}
</style>
