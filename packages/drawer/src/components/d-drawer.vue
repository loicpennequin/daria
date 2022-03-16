<script lang="ts" setup>
import { provide, toRef, computed } from 'vue';
import { DModal } from '@daria/modal';
import { DRAWER_INJECTION_KEY } from '../constants';
import { DrawerContext, DrawerPosition } from '../types';
import config from './d-drawer.config';

interface Props {
  isOpened: boolean;
  isScrollInside: boolean;
  colorScheme?: string;
  title?: string;
  position?: DrawerPosition;
}

type Emits = {
  (e: 'update:isOpened', value: boolean): void;
};

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  isScrollInside: true,
  ...config.defaultProps
});
const emit = defineEmits<Emits>();

const vModel = computed({
  get() {
    return props.isOpened;
  },
  set(val: boolean) {
    emit('update:isOpened', val);
  }
});

const drawer: DrawerContext = {
  position: toRef(props, 'position')
};

provide(DRAWER_INJECTION_KEY, drawer);
</script>

<template>
  <DModal
    v-model:is-opened="vModel"
    :title="props.title"
    :color-scheme="colorScheme"
    :is-scroll-inside="props.isScrollInside"
  >
    <slot />
  </DModal>
</template>
