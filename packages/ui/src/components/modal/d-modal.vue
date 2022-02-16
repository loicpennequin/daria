<script lang="ts" setup>
import { createTeleportHost } from '@/utils';
import { provide, toRef } from 'vue';
import { useBodyScrollLock, useEventListener } from '@/hooks';
import { MODAL_TELEPORT_HOST } from '@/constants/teleport-hosts';
import { MODAL_INJECTION_KEY } from '@/constants';
import { ModalContext } from './d-modal.types';

interface Props {
  isOpened: boolean;
}

const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<{
  (e: 'update:isOpened', value: boolean): void;
}>();

createTeleportHost(MODAL_TELEPORT_HOST);

useBodyScrollLock(toRef(props, 'isOpened'));

const modal: ModalContext = {
  isOpened: toRef(props, 'isOpened'),
  close: () => emit('update:isOpened', false),
  toggle: () => emit('update:isOpened', !props.isOpened),
  open: () => emit('update:isOpened', true)
};

const onKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Escape') modal.close();
};
useEventListener('keyup', onKeyUp);

provide(MODAL_INJECTION_KEY, modal);
</script>

<template>
  <teleport :to="`#${MODAL_TELEPORT_HOST}`">
    <slot v-bind="modal" />
  </teleport>
</template>
