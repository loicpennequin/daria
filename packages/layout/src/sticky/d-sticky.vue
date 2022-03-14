<script setup lang="ts">
import { computed, ref } from 'vue';
import { DBox, vOnIntersect } from '@daria/core';

interface Props {
  top?: number | string;
}
const props = withDefaults(defineProps<Props>(), { top: 0 });
const emit =
  defineEmits<{
    (e: 'update:is-sticking', value: boolean): void;
  }>();
const isSticking = ref(false);

const topMargin = -1 * Number(props.top);
const intersectOptions = {
  rootMargin: `${topMargin}px 9999px ${topMargin}px 9999px`,
  threshold: 1
};

const onIntersect = (entry: IntersectionObserverEntry) => {
  isSticking.value = entry.intersectionRatio < 1;
  emit('update:is-sticking', isSticking.value);
};

const top = computed(() => `${Number(props.top) - 1}px`);
</script>

<template>
  <DBox
    position="sticky"
    :top="top"
    :data-is-sticking="isSticking"
    v-on-intersect:[intersectOptions]="onIntersect"
  >
    <slot :is-sticking="isSticking" />
  </DBox>
</template>
