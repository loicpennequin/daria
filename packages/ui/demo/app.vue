<script setup lang="ts">
import { ref } from 'vue';

import AppHeader from './app-header.vue';
import ProductGrid from './product-grid.vue';
</script>

<template>
  <AppHeader />

  <d-container is="main">
    <ProductGrid />
  </d-container>
</template>

<style lang="postcss" scoped></style>
