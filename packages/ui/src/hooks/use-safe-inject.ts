import { inject } from 'vue';

export const useSafeInject = <T>(injectionKey: Symbol): T => {
  const context = inject<T>(injectionKey);

  if (context === undefined) {
    throw new Error(
      `Your are trying to use ${injectionKey} outside of a d-drawer component.`
    );
  }

  return context;
};
