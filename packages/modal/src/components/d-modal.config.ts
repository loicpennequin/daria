import { useComponentConfig } from '@daria/core';

const headerStyle = (c: string) => {
  if (c === 'white') {
    return { bg: 'white' };
  }

  if (c === 'yellow') {
    return { bg: 'yellow.3' };
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
