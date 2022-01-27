<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpoints } from '@/hooks';
import { compose } from '@/utils';

const isSticking = ref(false);
const isMenuOpened = ref(false);
const breakpoints = useBreakpoints();

const Card = compose('d-surface', 'd-flex');
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
              <d-button
                color-scheme="indigo"
                border-radius="0"
                py="2"
                font-size="3"
                is-fullwidth
              >
                Login
              </d-button>
            </template>
          </d-drawer-content>
        </d-drawer>
      </template>

      <h1>BRAND</h1>

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
        min-height="100px"
      >
        <d-scale-transition :is-visible="isVisible">
          <Card shadow="2" gap="3" direction="column">
            <img :src="`https://picsum.photos/seed/${i}/100`" />
            <p ml="3">Card {{ i }}</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              harum ipsam, velit sapiente nam totam quaerat, aliquam praesentium
              laudantium a minus soluta quas voluptatibus labore! Facere et
              repellat nisi enim.
            </p>
          </Card>
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
</style>
