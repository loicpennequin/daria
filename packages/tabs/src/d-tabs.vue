<script setup lang="ts">
import { provide, ref, computed, toRef } from 'vue';
import { TABS_INJECTION_KEY } from './constants';
import { DFlex } from '@daria/layout';
import { DButton } from '@daria/button';
import { DBox } from '@daria/core';
import { Tab, TabsContext } from './types';
import config from './d-tabs.config';

interface Props {
  modelValue: string;
  isLazy?: boolean;
  colorScheme?: string;
}
const props = withDefaults<Props, Required<Props>>(defineProps<Props>(), {
  isLazy: false,
  ...config.defaultProps
});

const emit = defineEmits(['update:modelValue']);

const tabsContext: TabsContext = {
  isLazy: toRef(props, 'isLazy'),
  tabs: ref<Tab[]>([]),
  activeTab: computed({
    get() {
      return props.modelValue;
    },
    set(val: string) {
      emit('update:modelValue', val);
    }
  }),
  add(tab) {
    tabsContext.tabs.value.push(tab);
  },
  remove(tab) {
    const i = tabsContext.tabs.value.indexOf(tab);
    tabsContext.tabs.value.splice(i, 1);
  },
  isActive: tab => tabsContext.activeTab.value === tab.name
};

provide(TABS_INJECTION_KEY, tabsContext);
const derivedStyles = computed(() => config.getDerivedStyleProps(props));

const wrapperStyle = {
  gap: 3,
  align: 'center',
  borderColor: 'grey.3',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px'
};

const getMenuItemStyle = (tab: Tab) => ({
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  borderRadius: 0,
  borderBottomColor: tabsContext.isActive(tab)
    ? derivedStyles.value?.menuItem.borderBottomColor
    : 'transparent',
  hover: {
    color: 'inherit'
  }
});
</script>

<template>
  <DFlex v-bind="wrapperStyle">
    <DBox v-for="tab in tabsContext.tabs.value" :key="tab.name">
      <DButton
        variant="ghost"
        @click="tabsContext.activeTab.value = tab.name"
        v-bind="getMenuItemStyle(tab)"
      >
        {{ tab.label }}
      </DButton>
    </DBox>
  </DFlex>
  <slot />
</template>
