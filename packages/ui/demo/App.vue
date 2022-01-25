<script setup lang="ts">
import { ref } from 'vue';
import { vReadableColor } from '@/directives';

const isSticking = ref(false);
</script>

<template>
  <d-sticky
    is="header"
    p="3"
    :bg="isSticking ? 'blue-7' : 'grey-0'"
    :shadow="isSticking ? 5 : 0"
    :transition="{ 'box-shadow': 3 }"
    v-model:is-sticking="isSticking"
    v-readable-color="true"
  >
    <d-flex justify="space-between" align="center">
      <h1 font-weight="light">BRAND</h1>

      <nav>
        <d-flex is="ul" align="center" gap="2">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a color="grey-0" href="/">About</a>
          </li>
          <li>
            <a color="grey-0" href="/">Contact</a>
          </li>
        </d-flex>
      </nav>
    </d-flex>
  </d-sticky>
</template>

<style lang="postcss">
#app {
  height: 100%;
}

body {
  height: 200vh !important;
}

nav a {
  color: inherit;
}
</style>
