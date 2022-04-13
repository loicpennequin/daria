<script lang="ts" setup>
import { useFormControl } from './use-form-control';
import { DBox } from '@daria/core';
</script>

<template>
  <DBox class="d-form-control-hint" font-size="2" my="3">
    <slot />
  </DBox>
</template>
