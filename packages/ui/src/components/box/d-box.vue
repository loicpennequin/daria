<script setup lang="ts">
import { watch, ref, inject, provide, onMounted, computed, unref } from 'vue';
import { mergeWith } from 'lodash-es';
import { useStyleProps } from '@/hooks';
import { StyleProp, isNotNil, upperCaseFirstLetter, isNil } from '@/utils';
import { checkedProps } from './d-box.contants';
import { COMPOSER_INJECTION_KEY } from '@/constants';

interface Props {
  is?: any;
  isComposerProvider?: boolean;
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
  isComposerProvider: false
});

const composerProps = inject(COMPOSER_INJECTION_KEY, {});

const styleProps = useStyleProps(props);

const mergedProps = computed(() =>
  mergeWith({}, unref(styleProps), unref(composerProps), (newVal, oldVal) =>
    isNil(newVal) ? oldVal : newVal
  )
);

provide(COMPOSER_INJECTION_KEY, props.isComposerProvider ? mergedProps : {});

const elementRef = ref<any>(null);

const setPropMarkers = (
  newVal: typeof styleProps.value,
  oldVal?: typeof styleProps.value
) => {
  if (!elementRef.value) return;
  const el = elementRef.value.$el ?? elementRef.value;
  if (!el || !el.dataset) return;

  checkedProps.forEach(prop => {
    const datasetKey = `d${upperCaseFirstLetter(prop)}`;
    if (isNotNil(newVal[prop])) {
      el.dataset[datasetKey] = '';
    } else if (isNotNil(oldVal?.[prop])) {
      delete el.dataset[datasetKey];
    }
  });
};

watch(
  mergedProps,
  (newVal, oldVal) => {
    setPropMarkers(newVal, oldVal);
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  setPropMarkers(mergedProps.value);
});
</script>

<template>
  <component ref="elementRef" :is="is" class="d-box">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.d-box {
  font-family: v-bind('mergedProps.fontFamily');
  border-color: v-bind('mergedProps.borderColor');
  transition: v-bind('mergedProps.transition');

  &[data-d-font-size] {
    font-size: v-bind('mergedProps.fontSize');
  }

  &[data-d-bg] {
    background-color: v-bind('mergedProps.bg');
  }

  &[data-d-color] {
    color: v-bind('mergedProps.color');
  }

  &[data-d-padding] {
    padding: v-bind('mergedProps.padding');
  }

  &[data-d-margin] {
    margin: v-bind('mergedProps.margin');
  }

  &[data-d-border-radius] {
    border-radius: v-bind('mergedProps.borderRadius');
  }

  &[data-d-font-weight] {
    font-weight: v-bind('mergedProps.fontWeight');
  }

  &[data-d-shadow] {
    box-shadow: v-bind('mergedProps.shadow');
  }
}
</style>
