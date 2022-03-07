import { getDefaultProp } from '@/utils';

export const useConfig = (componentName: string) =>
  getDefaultProp(componentName);
