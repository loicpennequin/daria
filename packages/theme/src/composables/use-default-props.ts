import { get } from 'lodash-es';
import { useTheme } from './use-theme';

export const useDefaultProp = <T>(propPath: string) =>
  (() => {
    const theme = useTheme();

    return get(theme, propPath);
  }) as unknown as T;
