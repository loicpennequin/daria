<script lang="ts" setup>
import { ref } from 'vue';
import { vOnIntersect } from '@/directives';
import { DBox } from '@/components/core';

interface Props {
  threshold?: number;
  minHeight?: number | string;
  once?: boolean;
  initialIsVisible?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  threshold: 0,
  minHeight: 'auto',
  initialIsVisible: false,
  once: false
});
const emit = defineEmits<{
  (e: 'update:is-visible', value: boolean): void;
}>();

const isVisible = ref(props.initialIsVisible);
const hasTriggered = ref(false);

const onIntersect = (entry: IntersectionObserverEntry) => {
  if (hasTriggered.value && props.once) return;

  isVisible.value = entry.isIntersecting;
  if (isVisible.value) hasTriggered.value = true;

  emit('update:is-visible', isVisible.value);
};

const intersectOptions = {
  threshold: props.threshold
};
</script>

<template>
  <DBox v-on-intersect:[intersectOptions]="onIntersect" class="d-lazy">
    <slot :is-visible="isVisible" />
  </DBox>
</template>

<style scoped>
.d-lazy {
  min-height: v-bind('props.minHeight');
}
</style>
