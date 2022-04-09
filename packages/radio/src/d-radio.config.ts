import { useComponentConfig } from '@daria/core';

export default useComponentConfig(
  'DRadio',
  {
    colorScheme: 'blue'
  },
  (props: Record<string, any>) => {
    const { colorScheme: c } = props;

    return {
      wrapper: {
        opacity: props.disabled ? 0.5 : 1
      },

      checkWrapper: {
        color: `${c}.4`,
        focusWithin: {
          color: `${c}.6`
        }
      }
    };
  }
);
