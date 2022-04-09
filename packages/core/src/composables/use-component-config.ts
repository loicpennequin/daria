import { useDefaultProp } from '@daria/theme';
import { mapObject, runIfFn } from '@daria/utils';
import { StylePropKey } from '../types';

type ComponentConfig = Record<string, any>;
type StyleObject = Partial<Record<StylePropKey, any>>;
type DerivedStyleProps<T = Record<string, any>> =
  | StyleObject
  | ((props: T) => Record<string, any>);

export const useComponentConfig = <T = any, D = any>(
  name: string,
  schema: ComponentConfig,
  derivedStyleProps?: DerivedStyleProps<T>
) => {
  return {
    defaultProps: mapObject<D>(schema, (value, key) =>
      useDefaultProp(`${name}.${key}`, value)
    ),
    getDerivedStyleProps(props: T) {
      return runIfFn(derivedStyleProps, props);
    }
  };
};
