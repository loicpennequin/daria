import { Ref } from 'vue';

export type Tab = {
  label: string;
  name: string;
};

export type TabsContext = {
  isLazy: Ref<boolean>;
  tabs: Ref<Tab[]>;
  activeTab: Ref<string>;
  add(tab: Tab): void;
  remove(tab: Tab): void;
  isActive(tab: Tab): boolean;
};
