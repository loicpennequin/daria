<script setup lang="ts">
import { inject, computed } from 'vue';
import { SECTION_INJECTION_KEY } from '@/constants';

const sectionLevel = inject<number>(SECTION_INJECTION_KEY, 1);
const is = computed(() => `h${sectionLevel}`);
</script>

<template>
  <d-box :is="is">
    <slot />
  </d-box>
</template>
