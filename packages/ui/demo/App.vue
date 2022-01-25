<script setup lang="ts">
import { vReadableColor } from '@/directives';
const log = console.log;
</script>

<template>
  <d-grid :columns="10" gap="2" justify="center" align="center">
    <d-box
      v-for="i in 1000"
      :key="i"
      p="1"
      font-size="1"
      :bg="['red-3', 'blue-8']"
      @click="log(i)"
    >
      {{ i }}
    </d-box>
  </d-grid>
</template>

<style lang="postcss">
.cell {
  width: min-content;
  background: var(--bg);
}
</style>
