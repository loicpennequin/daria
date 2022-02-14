import { ComputedRef, inject } from 'vue';

export const useSafeInject = <T>(injectionKey: Symbol): ComputedRef<T> => {
  const context = inject<ComputedRef<T>>(injectionKey);

  if (context === undefined) {
    throw new Error(
      `Your are trying to use ${injectionKey} outside of a d-drawer component.`
    );
  }

  return context;
};
