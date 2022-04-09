<script lang="ts" setup>
import { useFormControl } from './use-form-control';
import { DBox } from '@daria/core';
import { computed } from 'vue';

const { colorScheme } = useFormControl();
</script>

<template>
  <DBox class="d-form-control-hint" font-size="2" my="2">
    <slot />
  </DBox>
</template>
