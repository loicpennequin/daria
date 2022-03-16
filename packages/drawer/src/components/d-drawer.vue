<script lang="ts" setup>
import { createTeleportHost } from '@daria/utils';
import { provide, toRef, computed, ComputedRef } from 'vue';
import { useBodyScrollLock, useEventListener } from '@daria/core';
import { DRAWER_INJECTION_KEY, DRAWER_TELEPORT_HOST } from '../constants';
import { DrawerContext, DrawerPosition } from '../types';

interface Props {
  isOpened: boolean;
  position?: DrawerPosition;
}

const props = withDefaults(defineProps<Props>(), { position: 'left' });
const emit =
  defineEmits<{
    (e: 'update:isOpened', value: boolean): void;
  }>();

const hostID = DRAWER_TELEPORT_HOST;
createTeleportHost(hostID);

useBodyScrollLock(toRef(props, 'isOpened'));

const drawer: DrawerContext = {
  isOpened: toRef(props, 'isOpened'),
  position: toRef(props, 'position'),
  close: () => emit('update:isOpened', false),
  toggle: () => emit('update:isOpened', !props.isOpened),
  open: () => emit('update:isOpened', true)
};

const onKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Escape') drawer.close();
};
useEventListener('keyup', onKeyUp);

provide(DRAWER_INJECTION_KEY, drawer);
</script>

<template>
  <teleport :to="`#${hostID}`">
    <slot v-bind="{ drawer }" />
  </teleport>
</template>
