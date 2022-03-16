import { useComponentConfig } from '@daria/core';
interface ButtonProps {
  colorScheme: string;
  [key: string]: any;
}

const fullVariant = (props: ButtonProps) => {
  const { colorScheme: c } = props;

  const customColors: Record<string, any> = {
    grey: { normal: 2, hover: 4, focus: 3 },
    yellow: { normal: 3, hover: 4, focus: 5 }
  };

  console.log(c, customColors[c]);
  return {
    bg: `${c}.${customColors[c]?.normal || 5}`,
    borderColor: 'transparent',
    hover: {
      bg: `${c}.${customColors[c]?.hover || 7}`
    },
    focus: {
      bg: `${c}.${customColors[c]?.focus || 6}`
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

const ghostVariant = (props: any) => {
  const { colorScheme: c } = props;

  return {
    bg: 'transparent',
    borderColor: `transparent`,
    color: `${c}.8`,
    hover: {
      color: `${c}.5`
    }
  };
};

export default useComponentConfig<ButtonProps>(
  'DButton',
  {
    borderRadius: 3,
    colorScheme: 'grey'
  },
  props => {
    return {
      variants: {
        full: fullVariant(props),
        outlined: outlinedVariant(props),
        ghost: ghostVariant(props)
      }
    };
  }
);
