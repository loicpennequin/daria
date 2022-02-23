<script setup lang="ts">
import { DBox } from '@/components/core';
import { isAspectRatioSupported } from '@/utils';
import { computed } from 'vue';

interface Props {
  ratio?: number;
}

const props = withDefaults(defineProps<Props>(), {
  ratio: 1
});

const fallbackPadding = computed(() => `${(1 / props.ratio) * 100}%`);
</script>

<template>
  <DBox
    class="d-aspect-ratio"
    :class="!isAspectRatioSupported && 'd-aspect-ratio--fallback'"
  >
    <slot />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-aspect-ratio {
  :slotted(& > *) {
    aspect-ratio: v-bind(ratio);
    width: 100%;
    height: auto;
  }
}

.d-aspect-ratio--fallback {
  position: relative;
  height: 0;
  padding-top: v-bind(fallbackPadding);

  :slotted(*) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
