import { ColorScheme, mapObject, mapToCssVar } from '@/utils';
import { unref, computed, Ref } from 'vue';
import { useResponsiveProp } from './use-responsive-prop';

export const useColorScheme = (
  scheme: ColorScheme | Ref<ColorScheme>,
  key: string | Ref<string | undefined>
) => {
  const get = useResponsiveProp();

  return computed(() =>
    mapObject(unref(scheme), value =>
      mapToCssVar('color', `${get(unref(unref(key)))}-${value}`)
    )
  );
};
