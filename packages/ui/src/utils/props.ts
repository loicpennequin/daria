import { inject } from 'vue';
import { ThemeService } from '@/theme';
import { THEME_SERVICE } from '@/constants/injection-keys';
import { get } from 'lodash-es';
import { nanoid } from 'nanoid';

export const getDefaultProp = <T>(propPath: string) =>
  (() => {
    const themeService = inject<ThemeService>(THEME_SERVICE);

    return get(themeService?.config, propPath);
  }) as unknown as T;

export const randomIdProp = () => (() => nanoid()) as unknown as string;
