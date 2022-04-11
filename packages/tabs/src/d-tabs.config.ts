import { useComponentConfig } from '@daria/core';

interface Props {
  colorScheme: string;
}

type DefaultProps = Props;

export default useComponentConfig<Props, DefaultProps>(
  'DTabs',
  {
    colorScheme: 'blue'
  },
  (props: DefaultProps) => {
    const { colorScheme: c } = props;

    return {
      menuItem: {
        borderBottomColor: `${c}.5`
      }
    };
  }
);
