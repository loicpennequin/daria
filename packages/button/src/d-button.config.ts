import { useComponentConfig } from '@daria/core';

export default useComponentConfig(
  'DButton',
  {
    borderRadius: 3,
    colorScheme: 'grey'
  },
  (props: Record<string, any>) => {
    const { colorScheme: c } = props;

    return {
      variants: {
        full: {
          bg: `${c}.5`,
          borderColor: 'transparent',
          hover: {
            bg: `${c}.7`
          }
        },

        outlined: {
          bg: 'transparent',
          borderColor: `${c}.5`,
          color: `${c}.5`,
          borderWidth: '2px',
          hover: {
            bg: `${c}.0`,
            borderColor: `${c}.6`,
            color: `${c}.6`
          }
        }
      }
    };
  }
);
