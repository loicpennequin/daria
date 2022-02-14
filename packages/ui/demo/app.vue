<script setup lang="ts">
import { ref } from 'vue';

import AppHeader from './app-header.vue';
import ProductGrid from './product-grid.vue';

const form = ref({ email: '', password: '' });
</script>

<template>
  <AppHeader />

  <d-container is="main">
    <d-surface mb="4">
      <d-section>
        <d-section-heading mb="3">Join us today !</d-section-heading>
        <d-flex direction="column" gap="3" is="form" @submit.prevent>
          <d-form-control required v-slot="formControlProps">
            <d-form-control-label>E-mail</d-form-control-label>
            <d-input
              v-model="form.email"
              type="email"
              v-bind="formControlProps"
            />
          </d-form-control>

          <d-form-control v-slot="formControlProps">
            <d-form-control-label>Password</d-form-control-label>
            <d-input
              v-model="form.password"
              type="password"
              v-bind="formControlProps"
            />
          </d-form-control>

          <d-flex justify="flex-end">
            <d-button color-scheme="indigo">Sign up</d-button>
          </d-flex>
        </d-flex>
      </d-section>
    </d-surface>

    <ProductGrid />
  </d-container>
</template>

<style lang="postcss" scoped></style>
