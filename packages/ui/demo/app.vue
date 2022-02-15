<script setup lang="ts">
import { ref } from 'vue';

import AppHeader from './app-header.vue';
import AppFooter from './app-footer.vue';
import ProductGrid from './product-grid.vue';
import SignupForm from './signup-form.vue';

const form = ref({ email: '', password: '' });
</script>

<template>
  <AppHeader />

  <main>
    <d-box bg="indigo-1" p="5">
      <d-container>
        <d-grid :columns="[1, 2]">
          <d-grid-item :column="[1, 2]">
            <SignupForm />
          </d-grid-item>
        </d-grid>
      </d-container>
    </d-box>

    <d-container>
      <ProductGrid />
    </d-container>
  </main>

  <AppFooter />
</template>

<style lang="postcss">
nav {
  a {
    color: inherit;
    outline: none;
    &:not(:focus):not(:hover) {
      text-decoration: none;
    }
  }
}
</style>
