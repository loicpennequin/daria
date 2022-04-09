import { useComponentConfig } from '@daria/core';

interface DefaultProps {
  colorScheme: string;
}

export default useComponentConfig<unknown, DefaultProps>('DFormControl', {
  colorScheme: 'blue'
});
