import { get } from 'lodash-es';
import { useTheme } from './use-theme';
import { runIfFn } from '@daria/utils';

export const useDefaultProp = <T>(propPath: string, defaultValue?: any) =>
  ((props: any) => {
    const theme = useTheme();

    return get(theme, propPath) ?? runIfFn(defaultValue, props);
  }) as unknown as T;
