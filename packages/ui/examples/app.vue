<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { DBox } from '@/index';
</script>

<template>
  <DBox
    :bg="['red.1', 'blue.1']"
    display="flex"
    gap="3"
    :hover="{ bg: 'blue.4' }"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente
    dolores id, a dolor aliquam autem officia fuga neque alias fugiat rerum
    quaerat nihil voluptate. Cum ex adipisci aspernatur rerum?
  </DBox>
</template>

<style lang="postcss"></style>
