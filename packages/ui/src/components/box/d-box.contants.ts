import { useStyleProps } from '@/hooks';

type StyleProps = ReturnType<typeof useStyleProps>;

export const checkedProps = [
  'bg',
  'fontSize',
  'color',
  'padding',
  'margin',
  'borderRadius',
  'fontWeight',
  'shadow'
] as (keyof StyleProps['value'])[];
