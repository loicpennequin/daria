import { ResponsiveProp } from '@/utils';

export type FormControlContext = {
  id: string;
  colorScheme: ResponsiveProp<string>;
  required: boolean;
  isInvalid: boolean;
};
