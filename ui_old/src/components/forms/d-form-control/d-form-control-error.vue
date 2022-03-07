<script lang="ts" setup>
import { useFormControl } from './use-form-control';
import { DBox } from '@/components/core';

const { isInvalid } = useFormControl();
</script>

<template>
  <d-fade-transition :duration="300" :is-visible="isInvalid">
    <DBox class="d-form-control-error" color="red-5" my="2">
      <slot />
    </DBox>
  </d-fade-transition>
</template>
