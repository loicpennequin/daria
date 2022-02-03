import { ColorScheme, mapObject, mapToCssVar } from '@/utils';
import { unref, computed, Ref } from 'vue';
import { useResponsiveProp } from './use-responsive-prop';

export const useColorScheme = (
  scheme: ColorScheme | Ref<ColorScheme>,
  props: any
) => {
  const get = useResponsiveProp();

  return computed(() =>
    mapObject(unref(scheme), value =>
      mapToCssVar('color', `${get(unref(props.colorScheme))}-${value}`)
    )
  );
};
