import { useComponentConfig } from '@daria/core';

const fullVariant = (props: any) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.${c === 'grey' ? 2 : 5}`,
    borderColor: 'transparent',
    hover: {
      bg: `${c}.7`
    }
  };
};

const outlinedVariant = (props: any) => {
  const { colorScheme: c } = props;

  return {
    bg: 'transparent',
    borderColor: `${c}.5`,
    color: `${c}.5`,
    hover: {
      bg: `${c}.0`,
      borderColor: `${c}.6`,
      color: `${c}.6`
    }
  };
};

export default useComponentConfig(
  'DButton',
  {
    borderRadius: 3,
    colorScheme: 'grey'
  },
  (props: Record<string, any>) => {
    return {
      variants: {
        full: fullVariant(props),
        outlined: outlinedVariant(props)
      }
    };
  }
);
