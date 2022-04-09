<script lang="ts" setup>
import { useFormControl } from './use-form-control';
import { DBox } from '@daria/core';
import { DFade } from '@daria/transitions';

const { isInvalid } = useFormControl();
</script>

<template>
  <DFade>
    <DBox color="red.5" my="2" v-if="isInvalid">
      <slot />
    </DBox>
  </DFade>
</template>
