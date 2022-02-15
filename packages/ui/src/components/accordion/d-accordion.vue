<script lang="ts" setup>
import { provide, ref, computed, ComputedRef, toRef } from 'vue';
import { ACCORDION_INJECTION_KEY } from '@/constants';
import { AccordionContext, AccordionOpenedIndex } from './d-accordion.types';
import { isNil, isNumber, ResponsiveProp } from '@/utils';
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

const accordion: AccordionContext = {
  openedIndex: toRef(props, 'openedIndex'),
  colorScheme: toRef(props, 'colorScheme'),

  isOpened(index: number) {
    const { openedIndex } = props;
    if (isNil(openedIndex)) return false;
    if (isNumber(openedIndex)) {
      return openedIndex === index;
    }

    return openedIndex.includes(index);
  },
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

  toggle(index: number) {
    accordion.isOpened(index) ? accordion.close(index) : accordion.open(index);
  },

  register() {
    const id = nanoid();
    items.value.push(id);

    return items.value.indexOf(id);
  }
};

provide(ACCORDION_INJECTION_KEY, accordion);
</script>

<template>
  <slot v-bind="{ accordion }" />
</template>
