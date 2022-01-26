<script setup lang="ts">
import { ref } from 'vue';
import { vReadableColor } from '@/directives';
import { useBreakpoints } from '@/hooks';

const isSticking = ref(false);
const breakpoints = useBreakpoints();
</script>

<template>
  <d-sticky
    is="header"
    :p="[0, 3]"
    :bg="isSticking ? 'white' : 'transparent'"
    :shadow="isSticking ? 4 : 0"
    :transition="{ boxShadow: 3 }"
    v-model:is-sticking="isSticking"
  >
    <d-flex :justify="['flex-start', 'space-between']" align="center">
      <d-button variant="ghost" v-show="breakpoints.sm">
        <d-icon icon="bars" size="5" />
      </d-button>
      <h1>BRAND</h1>

      <nav>
        <d-flex is="ul" align="center" gap="4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a color="grey-0" href="/">About</a>
          </li>
          <li>
            <a color="grey-0" href="/">Contact</a>
          </li>
          <li>
            <d-button color-scheme="indigo">Login</d-button>
          </li>
        </d-flex>
      </nav>
    </d-flex>
  </d-sticky>

  <d-container>
    <d-grid is="main" p="4" gap="5" :columns="[1, 3]">
      <d-surface class="card" v-for="i in 9" :key="i" shadow="2">
        <d-flex align="center" justify="center">Card 1</d-flex>
      </d-surface>
    </d-grid>
  </d-container>
</template>

<style lang="postcss">
nav {
  @media (--viewport-sm) {
    display: none;
  }
  a {
    color: inherit;
    outline: none;
    &:not(:focus):not(:hover) {
      text-decoration: none;
    }
  }
}

.card > * {
  height: 200px;
}
</style>
