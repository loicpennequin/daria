<script setup lang="ts">
import { ref } from 'vue';

const isOpened = ref(false);
const openedAccordionIndex = ref([]);
</script>

<template>
  <d-button variant="ghost" @click="isOpened = true">
    <d-icon icon="bars" size="5" />
  </d-button>

  <d-drawer v-model:isOpened="isOpened">
    <d-drawer-overlay />
    <d-section>
      <d-drawer-content mr="6">
        <template #header>
          <d-flex align="center" justify="space-between">
            <d-section-heading>Menu</d-section-heading>
            <d-drawer-close-button />
          </d-flex>
        </template>

        <nav>
          <d-accordion
            v-model:openedIndex="openedAccordionIndex"
            color-scheme="indigo"
          >
            <d-accordion-item>
              <template #toggle>Sections</template>

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
            </d-accordion-item>
            <d-accordion-item>
              <template #toggle>Guide</template>
              <d-flex direction="column" gap="3" is="ul">
                <li>
                  <a href="/">How it works</a>
                </li>
                <li>
                  <a color="grey-0" href="/">Frequetly Asked Questions</a>
                </li>
                <li>
                  <a color="grey-0" href="/">Terms and Conditions</a>
                </li>
              </d-flex>
            </d-accordion-item>
          </d-accordion>
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
