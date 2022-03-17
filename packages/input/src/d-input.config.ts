import { useComponentConfig } from '@daria/core';

export default useComponentConfig(
  'DInput',
  {
    colorScheme: 'blue'
  },
  (props: Record<string, any>) => {
    const { colorScheme: c } = props;

    return {
      focusWithin: { borderColor: `${c}.4`, outlineColor: `${c}.4` }
    };
  }
);
