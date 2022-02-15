<script setup lang="ts">
import { vReadableColor } from '@/directives';
import { computed } from 'vue';

const sectionProps = computed(() => ({
  direction: ['column', 'row'],
  justify: 'space-around',
  gap: 4,
  is: 'ul'
}));
</script>

<template>
  <d-box is="footer" bg="indigo-5" p="4" v-readable-color="true" mt="5">
    <nav>
      <d-flex v-bind="sectionProps">
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
          <a href="/">How it works</a>
        </li>
        <li>
          <a href="/">Frequetly Asked Questions</a>
        </li>
        <li>
          <a href="/">Terms and Conditions</a>
        </li>
      </d-flex>
    </nav>
  </d-box>
</template>

<style lang="postcss" scoped></style>
