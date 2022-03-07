import { ResponsiveProp } from '@/utils';
import { Ref } from 'vue';

export type FormControlContext = {
  id: Ref<string>;
  colorScheme: Ref<string>;
  required: Ref<boolean>;
  disabled: Ref<boolean>;
  isInvalid: Ref<boolean>;
};
