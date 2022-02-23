import { onMounted, onUnmounted, unref, watch } from 'vue';

export const useEventListener = (
  eventName: string,
  handler: any,
  element = window
) => {
  const removeListener = () => {
    element.removeEventListener(unref(eventName), unref(handler));
  };

  const addListener = () => {
    element.addEventListener(unref(eventName), unref(handler));
  };

  watch(
    () => eventName,
    (_, oldVal) => {
      element.removeEventListener(unref(oldVal), unref(handler));
      addListener();
    }
  );

  watch(
    () => handler,
    (_, oldVal) => {
      element.removeEventListener(unref(eventName), unref(oldVal));
      addListener();
    }
  );

  onMounted(addListener);
  onUnmounted(removeListener);
};
