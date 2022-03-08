import { useDefaultProp } from '@daria/theme';
import { mapObject, runIfFn } from '@daria/utils';
import { StylePropKey } from '../types';

type ComponentConfig = Record<string, any>;
type StyleObject = Partial<Record<StylePropKey, any>>;
type DerivedStyleProps =
  | StyleObject
  | ((props: Record<string, any>) => StyleObject);

export const useComponentConfig = (
  name: string,
  schema: ComponentConfig,
  derivedStyleProps?: DerivedStyleProps
) => {
  return {
    defaultProps: mapObject(schema, (value, key) =>
      useDefaultProp(`${name}.${key}`, value)
    ),
    getDerivedStyleProps(props: any) {
      return runIfFn(derivedStyleProps, props);
    }
  };
};
