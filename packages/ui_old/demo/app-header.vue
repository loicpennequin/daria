<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpoints } from '@/hooks';

import BurgerMenu from './burger-menu.vue';
import LoginModal from './login-modal.vue';

const breakpoints = useBreakpoints();

const isSticking = ref(false);
const isLoginModalOpened = ref(false);
</script>

<template>
  <d-sticky
    :p="[0, 3]"
    :bg="isSticking ? 'white' : 'transparent'"
    :shadow="isSticking ? 3 : 0"
    :transition="{ backgroundColor: 2, boxShadow: 2 }"
    v-model:is-sticking="isSticking"
    is="header"
    class="app-header"
  >
    <d-flex :justify="['flex-start', 'space-between']" align="center">
      <BurgerMenu v-if="breakpoints.sm" />

      <d-section-heading>BRAND</d-section-heading>

      <nav v-show="breakpoints.aboveSm">
        <d-flex is="ul" align="center" gap="4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <d-button @click="isLoginModalOpened = true">Login</d-button>
          </li>
        </d-flex>
      </nav>
    </d-flex>
  </d-sticky>
  <LoginModal v-model:is-opened="isLoginModalOpened" />
</template>

<style lang="postcss" scoped>
.app-header {
  z-index: 10;
}
</style>
