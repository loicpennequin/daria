<script lang="ts" setup>
import { createTeleportHost } from '@/utils';
import { provide, toRef, computed } from 'vue';
import { useBodyScrollLock, useEventListener } from '@/hooks';
import { DRAWER_TELEPORT_HOST } from '@/constants/teleport-hosts';
import { DRAWER_INJECTION_KEY } from '@/constants';

interface Props {
  isOpened: boolean;
  position?: 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), { position: 'left' });
const emit = defineEmits<{
  (e: 'update:isOpened', value: boolean): void;
}>();
const hostID = DRAWER_TELEPORT_HOST;
createTeleportHost(hostID);

useBodyScrollLock(toRef(props, 'isOpened'));

const close = () => {
  // if (state.isOverlayOpened) emit('close');
  emit('update:isOpened', false);
};

const onKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};
useEventListener('keyup', onKeyUp);

const context = computed(() => ({
  isOpened: props.isOpened,
  position: props.position,
  close
}));

provide(DRAWER_INJECTION_KEY, context);
</script>

<template>
  <teleport :to="`#${hostID}`">
    <slot />
  </teleport>
</template>
