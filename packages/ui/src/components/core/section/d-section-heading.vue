<script setup lang="ts">
import { inject, computed } from 'vue';
import { SECTION_INJECTION_KEY } from '@/constants';
import DBox from '../box/d-box.vue';

const sectionLevel = inject<number>(SECTION_INJECTION_KEY, 1);
const is = computed(() => `h${sectionLevel}`);
</script>

<template>
  <DBox :is="is">
    <slot />
  </DBox>
</template>
