<script lang="ts" setup>
import { ref } from 'vue';
import { vOnIntersect } from '@/directives';
import { DBox } from '@/components/box';

interface Props {
  threshold?: number;
  minHeight?: number | string;
  once?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  threshold: 0,
  minHeight: 'auto',
  once: false
});
const emit = defineEmits<{
  (e: 'update:is-visible', value: boolean): void;
}>();

const isVisible = ref(false);

const onIntersect = (entry: IntersectionObserverEntry) => {
  if (isVisible.value && props.once) return;

  isVisible.value = entry.isIntersecting;
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
