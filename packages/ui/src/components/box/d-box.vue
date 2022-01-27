<script setup lang="ts">
import { useStyleProps } from '@/hooks';
import { StyleProp, isNotNil } from '@/utils';

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
  is: 'div'
});

const styleProps = useStyleProps(props);
</script>

<template>
  <component
    :is="is"
    class="d-box"
    :data-d-bg="isNotNil(styleProps.bg) ? '' : undefined"
    :data-d-color="isNotNil(props.color) ? '' : undefined"
    :data-d-padding="isNotNil(styleProps.padding) ? '' : undefined"
    :data-d-margin="isNotNil(styleProps.margin) ? '' : undefined"
    :data-d-border-radius="isNotNil(styleProps.borderRadius) ? '' : undefined"
    :data-d-font-weight="isNotNil(styleProps.fontWeight) ? '' : undefined"
    :data-d-shadow="isNotNil(styleProps.shadow) ? '' : undefined"
  >
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.d-box {
  font-family: v-bind('styleProps.fontFamily');
  font-size: v-bind('styleProps.fontSize');
  border-color: v-bind('styleProps.borderColor');
  transition: v-bind('styleProps.transition');

  &[data-d-bg] {
    background-color: v-bind('styleProps.bg');
  }

  &[data-d-color] {
    color: v-bind('styleProps.color');
  }

  &[data-d-padding] {
    padding: v-bind('styleProps.padding');
  }

  &[data-d-margin] {
    margin: v-bind('styleProps.margin');
  }

  &[data-d-border-radius] {
    border-radius: v-bind('styleProps.borderRadius');
  }

  &[data-d-font-weight] {
    font-weight: v-bind('styleProps.fontWeight');
  }

  &[data-d-shadow] {
    box-shadow: v-bind('styleProps.shadow');
  }
}
</style>
