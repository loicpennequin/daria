<script setup lang="ts">
import { provide, inject } from 'vue';
import { SECTION_INJECTION_KEY } from './constants';

const sectionLevel = inject<number>(SECTION_INJECTION_KEY, 1);
provide(SECTION_INJECTION_KEY, sectionLevel + 1);
</script>

<template>
  <slot />
</template>
