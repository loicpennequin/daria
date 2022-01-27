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
    :p="[0, 3]"
    :bg="isSticking ? 'white' : 'transparent'"
    :shadow="isSticking ? 4 : 0"
    :transition="{ boxShadow: 3 }"
    v-model:is-sticking="isSticking"
    is="header"
  >
    <d-flex :justify="['flex-start', 'space-between']" align="center">
      <template v-if="breakpoints.sm">
        <d-button variant="ghost" @click="isMenuOpened = true">
          <d-icon icon="bars" size="5" />
        </d-button>

        <d-drawer v-model:isOpened="isMenuOpened" v-if="breakpoints.sm">
          <d-drawer-overlay />
          <d-drawer-content mr="6">
            <template #header>
              <d-flex align="center" justify="space-between">
                <h2>Menu</h2>
                <d-drawer-close-button />
              </d-flex>
            </template>

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
              </d-flex>
            </nav>

            <template #footer>
              <d-button color-scheme="indigo" border-radius="0" is-fullwidth>
                Login
              </d-button>
            </template>
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
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <d-button color-scheme="indigo">Login</d-button>
          </li>
        </d-flex>
      </nav>
    </d-flex>
  </d-sticky>

  <d-container is="main">
    <d-grid p="4" gap="5" :columns="[1, 3]">
      <d-lazy
        v-slot="{ isVisible }"
        v-for="i in 18"
        :key="i"
        min-height="200px"
      >
        <d-scale-transition :is-visible="isVisible" shadow="2" appear>
          <d-surface shadow="2" p="0">
            <d-flex is="d-surface" align="center" justify="center" class="card">
              Card {{ i }}
            </d-flex>
          </d-surface>
        </d-scale-transition>
      </d-lazy>
    </d-grid>
  </d-container>
</template>

<style lang="postcss">
header {
  z-index: 10;
}

nav {
  a {
    color: inherit;
    outline: none;
    &:not(:focus):not(:hover) {
      text-decoration: none;
    }
  }
}

.card {
  height: 200px;
}
</style>
