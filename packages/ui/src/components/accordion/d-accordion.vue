<script lang="ts" setup>
import { provide, ref, computed, ComputedRef } from 'vue';
import { ACCORDION_INJECTION_KEY } from '@/constants';
import { AccordionContext, AccordionOpenedIndex } from './d-accordion.types';
import { isNumber, ResponsiveProp } from '@/utils';
import { nanoid } from 'nanoid';

interface Props {
  allowMultiple?: boolean;
  openedIndex?: AccordionOpenedIndex;
  colorScheme?: ResponsiveProp<string>;
}

const props = withDefaults(defineProps<Props>(), {
  allowMultiple: false,
  openedIndex: null,
  colorScheme: 'grey'
});
const emit = defineEmits<{
  (e: 'update:openedIndex', value: AccordionOpenedIndex): void;
}>();
const items = ref<string[]>([]);

const accordion: ComputedRef<AccordionContext> = computed(() => ({
  openedIndex: props.openedIndex,
  colorScheme: props.colorScheme,

  open(index: number) {
    const { openedIndex, allowMultiple } = props;

    if (!allowMultiple) {
      emit('update:openedIndex', index);
      return;
    }

    if (isNumber(openedIndex)) return;
    if (openedIndex?.includes(index)) return;

    emit('update:openedIndex', [...(openedIndex || []), index]);
  },

  close(index: number) {
    const { openedIndex, allowMultiple } = props;

    if (!allowMultiple) {
      emit('update:openedIndex', null);
    }

    if (isNumber(openedIndex)) return;
    emit(
      'update:openedIndex',
      (openedIndex || []).filter(i => i !== index)
    );
  },

  register() {
    const id = nanoid();
    items.value.push(id);

    return items.value.indexOf(id);
  }
}));

provide(ACCORDION_INJECTION_KEY, accordion);
</script>

<template>
  <slot v-bind="{ accordion }" />
</template>
