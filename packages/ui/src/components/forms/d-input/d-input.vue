<script lang="ts">
export default { inheritAttrs: false };
</script>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { DIcon, DBox } from '@/components/core';
import { DFlex } from '@/components/layout';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Maybe, ResponsiveProp } from '@/utils';
import { vReadableColor } from '@/directives';

interface Props {
  modelValue: string;
  leftIcon?: ResponsiveProp<string>;
  rightIcon?: ResponsiveProp<string>;
  colorScheme?: ResponsiveProp<string>;
  id?: string;
  isInvalid?: boolean;
}

const props = withDefaults(defineProps<Props>(), { colorScheme: 'grey' });

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const scheme = useColorScheme({ borderFocus: 3 }, props);

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emit('update:modelValue', val);
  }
});
</script>

<template>
  <DFlex
    gap="0"
    class="d-input"
    :border-color="props.isInvalid ? 'red-5' : 'grey-2'"
    bg="white"
    align="center"
  >
    <slot name="left">
      <DBox v-if="props.leftIcon" p="1">
        <DIcon :icon="props.leftIcon" />
      </DBox>
    </slot>
    <input
      v-model="vModel"
      v-readable-color="true"
      :id="props.id"
      v-bind="$attrs"
    />

    <slot name="right">
      <DBox v-if="props.rightIcon" p="1">
        <DIcon :icon="props.rightIcon" />
      </DBox>
    </slot>
  </DFlex>
</template>

<style lang="postcss" scoped>
.d-input {
  border-width: 1px;
  border-style: solid;

  &:focus-within {
    border-color: v-bind('scheme.borderFocus');
    outline: solid 1px v-bind('scheme.borderFocus');
  }

  input {
    padding: var(--d-spacing-2);
    border: none;
    background: inherit;
    flex-grow: 1;

    &::placeholder {
      font-style: italic;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
