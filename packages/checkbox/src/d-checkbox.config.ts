import { useComponentConfig } from '@daria/core';

export default useComponentConfig(
  'DCheckbox',
  {
    colorScheme: 'blue'
  },
  (props: Record<string, any>) => {
    const { colorScheme: c } = props;

    return {
      wrapper: {
        color: `${c}.4`,
        focusWithin: {
          color: `${c}.6`
        }
      }
    };
  }
);
