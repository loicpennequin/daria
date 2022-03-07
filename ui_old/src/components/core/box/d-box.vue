<script setup lang="ts">
import { ref } from 'vue';
import { useStyleProps } from '@/hooks';
import { ResponsiveProp, StyleProp } from '@/utils';

interface Props {
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
  gap?: StyleProp;
  borderRadius?: StyleProp;
  transition?: ResponsiveProp<number | { [key: string]: number }>;

  hoverShadow?: StyleProp;
  hoverFontFamily?: StyleProp;
  hoverFontSize?: StyleProp;
  hoverFontWeight?: StyleProp;
  hoverMargin?: StyleProp;
  hoverM?: StyleProp;
  hoverMarginX?: StyleProp;
  hoverMx?: StyleProp;
  hoverMarginY?: StyleProp;
  hoverMy?: StyleProp;
  hoverMarginTop?: StyleProp;
  hoverMt?: StyleProp;
  hoverMarginBottom?: StyleProp;
  hoverMb?: StyleProp;
  hoverMarginLeft?: StyleProp;
  hoverMl?: StyleProp;
  hoverMarginRight?: StyleProp;
  hoverMr?: StyleProp;
  hoverPadding?: StyleProp;
  hoverP?: StyleProp;
  hoverPaddingX?: StyleProp;
  hoverPx?: StyleProp;
  hoverPaddingY?: StyleProp;
  hoverPy?: StyleProp;
  hoverPaddingTop?: StyleProp;
  hoverPt?: StyleProp;
  hoverPaddingBottom?: StyleProp;
  hoverPb?: StyleProp;
  hoverPaddingLeft?: StyleProp;
  hoverPl?: StyleProp;
  hoverPaddingRight?: StyleProp;
  hoverPr?: StyleProp;
  hoverBackground?: StyleProp;
  hoverBg?: StyleProp;
  hoverColor?: StyleProp;
  hoverBorderColor?: StyleProp;
  hoverGap?: StyleProp;
  hoverBorderRadius?: StyleProp;
  hoverTransition?: ResponsiveProp<number | { [key: string]: number }>;

  hShadow?: StyleProp;
  hFontFamily?: StyleProp;
  hFontSize?: StyleProp;
  hFontWeight?: StyleProp;
  hMargin?: StyleProp;
  hM?: StyleProp;
  hMarginX?: StyleProp;
  hMx?: StyleProp;
  hMarginY?: StyleProp;
  hMy?: StyleProp;
  hMarginTop?: StyleProp;
  hMt?: StyleProp;
  hMarginBottom?: StyleProp;
  hMb?: StyleProp;
  hMarginLeft?: StyleProp;
  hMl?: StyleProp;
  hMarginRight?: StyleProp;
  hMr?: StyleProp;
  hPadding?: StyleProp;
  hP?: StyleProp;
  hPaddingX?: StyleProp;
  hPx?: StyleProp;
  hPaddingY?: StyleProp;
  hPy?: StyleProp;
  hPaddingTop?: StyleProp;
  hPt?: StyleProp;
  hPaddingBottom?: StyleProp;
  hPb?: StyleProp;
  hPaddingLeft?: StyleProp;
  hPl?: StyleProp;
  hPaddingRight?: StyleProp;
  hPr?: StyleProp;
  hBackground?: StyleProp;
  hBg?: StyleProp;
  hColor?: StyleProp;
  hGap?: StyleProp;
  hBorderColor?: StyleProp;
  hBorderRadius?: StyleProp;
  hTransition?: ResponsiveProp<number | { [key: string]: number }>;

  focusShadow?: StyleProp;
  focusFontFamily?: StyleProp;
  focusFontSize?: StyleProp;
  focusFontWeight?: StyleProp;
  focusMargin?: StyleProp;
  focusM?: StyleProp;
  focusMarginX?: StyleProp;
  focusMx?: StyleProp;
  focusMarginY?: StyleProp;
  focusMy?: StyleProp;
  focusMarginTop?: StyleProp;
  focusMt?: StyleProp;
  focusMarginBottom?: StyleProp;
  focusMb?: StyleProp;
  focusMarginLeft?: StyleProp;
  focusMl?: StyleProp;
  focusMarginRight?: StyleProp;
  focusMr?: StyleProp;
  focusPadding?: StyleProp;
  focusP?: StyleProp;
  focusPaddingX?: StyleProp;
  focusPx?: StyleProp;
  focusPaddingY?: StyleProp;
  focusPy?: StyleProp;
  focusPaddingTop?: StyleProp;
  focusPt?: StyleProp;
  focusPaddingBottom?: StyleProp;
  focusPb?: StyleProp;
  focusPaddingLeft?: StyleProp;
  focusPl?: StyleProp;
  focusPaddingRight?: StyleProp;
  focusPr?: StyleProp;
  focusBackground?: StyleProp;
  focusBg?: StyleProp;
  focusColor?: StyleProp;
  focusBorderColor?: StyleProp;
  focusGap?: StyleProp;
  focusBorderRadius?: StyleProp;
  focusTransition?: ResponsiveProp<number | { [key: string]: number }>;

  fShadow?: StyleProp;
  fFontFamily?: StyleProp;
  fFontSize?: StyleProp;
  fFontWeight?: StyleProp;
  fMargin?: StyleProp;
  fM?: StyleProp;
  fMarginX?: StyleProp;
  fMx?: StyleProp;
  fMarginY?: StyleProp;
  fMy?: StyleProp;
  fMarginTop?: StyleProp;
  fMt?: StyleProp;
  fMarginBottom?: StyleProp;
  fMb?: StyleProp;
  fMarginLeft?: StyleProp;
  fMl?: StyleProp;
  fMarginRight?: StyleProp;
  fMr?: StyleProp;
  fPadding?: StyleProp;
  fP?: StyleProp;
  fPaddingX?: StyleProp;
  fPx?: StyleProp;
  fPaddingY?: StyleProp;
  fPy?: StyleProp;
  fPaddingTop?: StyleProp;
  fPt?: StyleProp;
  fPaddingBottom?: StyleProp;
  fPb?: StyleProp;
  fPaddingLeft?: StyleProp;
  fPl?: StyleProp;
  fPaddingRight?: StyleProp;
  fPr?: StyleProp;
  fBackground?: StyleProp;
  fBg?: StyleProp;
  fColor?: StyleProp;
  fBorderColor?: StyleProp;
  fGap?: StyleProp;
  fBorderRadius?: StyleProp;
  fTransition?: ResponsiveProp<number | { [key: string]: number }>;

  focusVisibleShadow?: StyleProp;
  focusVisibleFontFamily?: StyleProp;
  focusVisibleFontSize?: StyleProp;
  focusVisibleFontWeight?: StyleProp;
  focusVisibleMargin?: StyleProp;
  focusVisibleM?: StyleProp;
  focusVisibleMarginX?: StyleProp;
  focusVisibleMx?: StyleProp;
  focusVisibleMarginY?: StyleProp;
  focusVisibleMy?: StyleProp;
  focusVisibleMarginTop?: StyleProp;
  focusVisibleMt?: StyleProp;
  focusVisibleMarginBottom?: StyleProp;
  focusVisibleMb?: StyleProp;
  focusVisibleMarginLeft?: StyleProp;
  focusVisibleMl?: StyleProp;
  focusVisibleMarginRight?: StyleProp;
  focusVisibleMr?: StyleProp;
  focusVisiblePadding?: StyleProp;
  focusVisibleP?: StyleProp;
  focusVisiblePaddingX?: StyleProp;
  focusVisiblePx?: StyleProp;
  focusVisiblePaddingY?: StyleProp;
  focusVisiblePy?: StyleProp;
  focusVisiblePaddingTop?: StyleProp;
  focusVisiblePt?: StyleProp;
  focusVisiblePaddingBottom?: StyleProp;
  focusVisiblePb?: StyleProp;
  focusVisiblePaddingLeft?: StyleProp;
  focusVisiblePl?: StyleProp;
  focusVisiblePaddingRight?: StyleProp;
  focusVisiblePr?: StyleProp;
  focusVisibleBackground?: StyleProp;
  focusVisibleBg?: StyleProp;
  focusVisibleColor?: StyleProp;
  focusVisibleBorderColor?: StyleProp;
  focusVisibleGap?: StyleProp;
  focusVisibleBorderRadius?: StyleProp;
  focusVisibleTransition?: ResponsiveProp<number | { [key: string]: number }>;

  fvShadow?: StyleProp;
  fvFontFamily?: StyleProp;
  fvFontSize?: StyleProp;
  fvFontWeight?: StyleProp;
  fvMargin?: StyleProp;
  fvM?: StyleProp;
  fvMarginX?: StyleProp;
  fvMx?: StyleProp;
  fvMarginY?: StyleProp;
  fvMy?: StyleProp;
  fvMarginTop?: StyleProp;
  fvMt?: StyleProp;
  fvMarginBottom?: StyleProp;
  fvMb?: StyleProp;
  fvMarginLeft?: StyleProp;
  fvMl?: StyleProp;
  fvMarginRight?: StyleProp;
  fvMr?: StyleProp;
  fvPadding?: StyleProp;
  fvP?: StyleProp;
  fvPaddingX?: StyleProp;
  fvPx?: StyleProp;
  fvPaddingY?: StyleProp;
  fvPy?: StyleProp;
  fvPaddingTop?: StyleProp;
  fvPt?: StyleProp;
  fvPaddingBottom?: StyleProp;
  fvPb?: StyleProp;
  fvPaddingLeft?: StyleProp;
  fvPl?: StyleProp;
  fvPaddingRight?: StyleProp;
  fvPr?: StyleProp;
  fvBackground?: StyleProp;
  fvBg?: StyleProp;
  fvColor?: StyleProp;
  fvBorderColor?: StyleProp;
  fvGap?: StyleProp;
  fvBorderRadius?: StyleProp;
  fvTransition?: ResponsiveProp<number | { [key: string]: number }>;

  is?: any;
  forwardRef?: (el: any) => void;
}

const props = withDefaults(defineProps<Props>(), {
  is: 'div'
});

const className = useStyleProps(props);

const element = ref<any>(null);
const elementRef = (el: any) => {
  element.value = el;
  props.forwardRef?.(el);
};

// const hasStyleProp = (property: keyof typeof styleProps.value) =>
//   !!styleProps.value[property];

// const dBoxAttr = computed(() =>
//   checkedProps.filter(hasStyleProp).map(camelToKebabCase).join(' ')
// );
</script>

<template>
  <component :ref="elementRef" :is="is" :class="className">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
/* .d-box {
  font-family: v-bind('styleProps.fontFamily');

  &:where([data-d-box*='font-family']) {
    transition: v-bind('styleProps.fontFamily');
  }
  &:where([data-d-box*='h-font-family']):hover {
    transition: v-bind('styleProps.hFontFamily');
  }
  &:where([data-d-box*='f-font-family']):focus {
    transition: v-bind('styleProps.fFontFamily');
  }
  &:where([data-d-box*='fv-font-family']):focus-visible {
    transition: v-bind('styleProps.fvFontFamily');
  }

  &:where([data-d-box*='transition']) {
    transition: v-bind('styleProps.transition');
  }
  &:where([data-d-box*='h-transition']):hover {
    transition: v-bind('styleProps.hTransition');
  }
  &:where([data-d-box*='f-transition']):focus {
    transition: v-bind('styleProps.fvTransition');
  }
  &:where([data-d-box*='fv-transition']):focus-visible {
    transition: v-bind('styleProps.fvTransition');
  }

  &:where([data-d-box*='font-size']) {
    font-size: v-bind('styleProps.fontSize');
  }
  &:where([data-d-box*='h-font-size']):hover {
    font-size: v-bind('styleProps.hFontSize');
  }
  &:where([data-d-box*='f-font-size']):focus {
    font-size: v-bind('styleProps.fFontSize');
  }
  &:where([data-d-box*='fv-font-size']):focus-visible {
    font-size: v-bind('styleProps.fvFontSize');
  }

  &:where([data-d-box*='bg']) {
    background-color: v-bind('styleProps.bg');
  }
  &:where([data-d-box*='h-bg']):hover {
    background: v-bind('styleProps.hBg');
  }
  &:where([data-d-box*='f-bg']):focus {
    background: v-bind('styleProps.fBg');
  }
  &:where([data-d-box*='fv-bg']):focus-visible {
    background: v-bind('styleProps.fvBg');
  }

  &:where([data-d-box*='color']) {
    color: v-bind('styleProps.color');
  }
  &:where([data-d-box*='h-color']):hover {
    color: v-bind('styleProps.hColor');
  }
  &:where([data-d-box*='f-color']):focus {
    color: v-bind('styleProps.fColor');
  }
  &:where([data-d-box*='fv-color']):focus(visible) {
    color: v-bind('styleProps.fvColor');
  }

  &:where([data-d-box*='border-color']) {
    border-color: v-bind('styleProps.borderColor');
  }
  &:where([data-d-box*='h-border-color']):hover {
    border-color: v-bind('styleProps.hBorderColor');
  }
  &:where([data-d-box*='f-border-color']):focus {
    border-color: v-bind('styleProps.fBorderColor');
  }
  &:where([data-d-box*='fv-border-color']):focus-visible {
    border-color: v-bind('styleProps.fvBorderColor');
  }

  &:where([data-d-box*='padding']) {
    padding: v-bind('styleProps.padding');
  }
  &:where([data-d-box*='h-padding']):hover {
    padding: v-bind('styleProps.hPadding');
  }
  &:where([data-d-box*='f-padding']):focus {
    padding: v-bind('styleProps.fPadding');
  }
  &:where([data-d-box*='fv-padding']):focus-visible {
    padding: v-bind('styleProps.fvPadding');
  }

  &:where([data-d-box*='margin']) {
    margin: v-bind('styleProps.margin');
  }
  &:where([data-d-box*='h-margin']):hover {
    margin: v-bind('styleProps.hMargin');
  }
  &:where([data-d-box*='f-margin']):focus {
    margin: v-bind('styleProps.fMargin');
  }
  &:where([data-d-box*='fv-margin']):focus-visible {
    margin: v-bind('styleProps.fvMargin');
  }

  &:where([data-d-box*='border-radius']) {
    border-radius: v-bind('styleProps.borderRadius');
  }
  &:where([data-d-box*='h-border-radius']):hover {
    border-radius: v-bind('styleProps.hBorderRadius');
  }
  &:where([data-d-box*='f-border-radius']):focus {
    border-radius: v-bind('styleProps.fBorderRadius');
  }
  &:where([data-d-box*='fv-border-radius']):focus-visible {
    border-radius: v-bind('styleProps.fvBorderRadius');
  }

  &:where([data-d-box*='font-weight']) {
    font-weight: v-bind('styleProps.fontWeight');
  }
  &:where([data-d-box*='h-font-weight']):hover {
    font-weight: v-bind('styleProps.hFontWeight');
  }
  &:where([data-d-box*='f-font-weight']):focus {
    font-weight: v-bind('styleProps.fFontWeight');
  }
  &:where([data-d-box*='fv-font-weight']):focus-visible {
    font-weight: v-bind('styleProps.fvFontWeight');
  }

  &:where([data-d-box*='shadow']) {
    box-shadow: v-bind('styleProps.shadow');
  }
  &:where([data-d-box*='h-shadow']):hover {
    box-shadow: v-bind('styleProps.hShadow');
  }
  &:where([data-d-box*='f-shadow']):focus {
    box-shadow: v-bind('styleProps.fShadow');
  }
  &:where([data-d-box*='fv-shadow']):focus-visible {
    box-shadow: v-bind('styleProps.fvShadow');
  }
} */
</style>
