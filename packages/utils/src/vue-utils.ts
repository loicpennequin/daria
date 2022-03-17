import { inject } from 'vue';
import { nanoid } from 'nanoid';

export const createTeleportHost = (id: string) => {
  const host = document.getElementById(id);
  if (!host) {
    const div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
  }
};

export const useSafeInject = <T>(injectionKey: Symbol): T => {
  const context = inject<T>(injectionKey);

  if (context === undefined) {
    throw new Error(
      `Your are trying to use ${injectionKey} outside of a d-drawer component.`
    );
  }

  return context;
};

export const randomIdProp = () => (() => nanoid()) as unknown as string;
