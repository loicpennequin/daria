<script setup lang="ts">
import { ref } from 'vue';

const isOpened = ref(false);
</script>

<template>
  <d-button variant="ghost" @click="isOpened = true">
    <d-icon icon="bars" size="5" />
  </d-button>

  <d-drawer v-model:isOpened="isOpened">
    <d-section>
      <d-drawer-overlay />
      <d-drawer-content mr="6">
        <template #header>
          <d-flex align="center" justify="space-between">
            <d-section-heading>Menu</d-section-heading>
            <d-drawer-close-button />
          </d-flex>
        </template>

        <nav>
          <d-flex direction="column" gap="3" is="ul" font-size="4">
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
    </d-section>
  </d-drawer>
</template>
