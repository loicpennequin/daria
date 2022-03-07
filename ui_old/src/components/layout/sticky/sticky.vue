<script setup lang="ts">
import { vOnIntersect } from '@/directives';
import { computed, ref } from 'vue';

import { DBox } from '@/components/core';

interface Props {
  top?: number | string;
}
const props = withDefaults(defineProps<Props>(), { top: 0 });
const emit = defineEmits<{
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

const styleProps = computed(() => ({
  top: `${Number(props.top) - 1}px`
}));

const classes = [isSticking.value && 'd-sticky--is-sticking'];
</script>

<template>
  <DBox
    class="d-sticky"
    :classes="classes"
    v-on-intersect:[intersectOptions]="onIntersect"
  >
    <slot />
  </DBox>
</template>

<style lang="postcss" scoped>
.d-sticky {
  position: sticky;
  top: v-bind('styleProps.top');
}
</style>
