<script setup lang="ts">
import { useStyleProps } from '@/hooks';
import { StyleProp } from '@/utils';
import { computed } from 'vue';

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
  transition?: StyleProp;
}
const props = withDefaults(defineProps<Props>(), {
  is: 'div',
  p: 0,
  m: 0,
  borderRadius: 0,
  fontWeight: 'normal',
  shadow: 0
});

const styleProps = useStyleProps(props);
const textColor = computed(() => styleProps.value.color || 'inherit');
const bgColor = computed(() => styleProps.value.bg || 'transparent');
</script>

<template>
  <component :is="is" class="d-box"><slot /></component>
</template>

<style scoped>
.d-box {
  font-family: v-bind('styleProps.fontFamily');
  font-weight: v-bind('styleProps.fontWeight');
  font-size: v-bind('styleProps.fontSize');
  margin: v-bind('styleProps.margin');
  padding: v-bind('styleProps.padding');
  background-color: v-bind('bgColor');
  color: v-bind('textColor');
  box-shadow: v-bind('styleProps.shadow');
  border-color: v-bind('styleProps.borderColor');
  border-radius: v-bind('styleProps.borderRadius');
  transition: v-bind('styleProps.transition');
}
</style>
