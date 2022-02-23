<script lang="ts">
export default { inheritAttrs: false };
</script>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';

import { DBox } from '@/components/core';

interface Props {
  src: string;
  lazySrc?: string;
  width?: string | number;
  height?: string | number;
}
const props = defineProps<Props>();

const image = ref(new Image());
const lazyImage = ref(new Image());
const isImageLoaded = ref(false);

image.value.onload = () => {
  isImageLoaded.value = true;
};

const init = () => {
  image.value.src = props.src;

  if (props.lazySrc && (!props.height || !props.width)) {
    console.warn(
      'A height and width must be provided to use the lazySrc prop on d-image'
    );
    return;
  }

  if (props.lazySrc) {
    lazyImage.value.src = props.lazySrc;
  }
};

onMounted(init);

watch(() => [props.src, props.lazySrc], init);
</script>

<template>
  <d-grid columns="1" class="d-image">
    <d-fade-transition :is-visible="isImageLoaded" appear>
      <DBox
        is="img"
        :src="src"
        class="d-image"
        :class="!isImageLoaded && 'd-image--fallback'"
        :width="width"
        :height="height"
        v-bind="$attrs"
      />
    </d-fade-transition>

    <d-fade-transition :is-visible="!isImageLoaded" appear>
      <DBox
        is="img"
        :src="lazySrc"
        class="d-image"
        :class="!isImageLoaded && 'd-image--fallback'"
        :width="width"
        :height="height"
        v-bind="$attrs"
      />
    </d-fade-transition>
  </d-grid>
</template>

<style lang="postcss" scoped>
.d-image > * {
  grid-column: 1;
  grid-row: 1;
}
img {
  width: 100%;
  height: 100%;
}
.d-image--fallback {
  filter: blur(10px);
}
</style>
