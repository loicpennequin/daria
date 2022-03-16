import { useComponentConfig } from '@daria/core';

const headerStyle = (c: string) => {
  if (c === 'white') {
    return { bg: 'white ' };
  }

  return {
    bg: `${c}.5`
  };
};

export default useComponentConfig(
  'DModal',
  {
    colorScheme: 'blue'
  },
  (props: Record<string, any>) => {
    const { colorScheme: c } = props;

    return {
      header: headerStyle(c)
    };
  }
);
