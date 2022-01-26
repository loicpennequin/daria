<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpoints } from '@/hooks';

const isSticking = ref(false);
const isMenuOpened = ref(false);
const breakpoints = useBreakpoints();

const debug = () => console.log(breakpoints);
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
      <template v-if="breakpoints.sm">
        <d-button variant="ghost" @click="isMenuOpened = true">
          <d-icon icon="bars" size="5" />
        </d-button>

        <d-drawer v-model:isOpened="isMenuOpened" v-if="breakpoints.sm">
          <d-drawer-overlay />
          <d-drawer-content mr="6">
            <d-flex align="center" justify="space-between" mb="4">
              <h2>Menu</h2>
              <d-drawer-close-button />
            </d-flex>
            <nav>
              <d-flex direction="column" gap="3" is="ul">
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
          </d-drawer-content>
        </d-drawer>
      </template>

      <h1 @click="debug">BRAND</h1>

      <nav v-show="breakpoints.aboveSm">
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
        <d-flex align="center" justify="center">Card {{ i }}</d-flex>
      </d-surface>
    </d-grid>
  </d-container>
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

.card > * {
  height: 200px;
}
</style>
