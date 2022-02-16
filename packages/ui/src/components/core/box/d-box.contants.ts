import { useStyleProps } from '@/hooks';
import { upperCaseFirstLetter } from '@/utils';

type StyleProps = ReturnType<typeof useStyleProps>;

const baseCheckedProps: string[] = [
  'bg',
  'fontSize',
  'color',
  'borderColor',
  'padding',
  'margin',
  'borderRadius',
  'fontWeight',
  'shadow',
  'transition'
];

const getPrefixedProps = (prefix: string) =>
  baseCheckedProps.map(p => `${prefix}${upperCaseFirstLetter(p)}`);

export const checkedProps = [
  ...baseCheckedProps,
  ...getPrefixedProps('h'),
  ...getPrefixedProps('f'),
  ...getPrefixedProps('fv')
];
