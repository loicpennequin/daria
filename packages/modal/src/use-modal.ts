import { MODAL_INJECTION_KEY } from './constants';
import { useSafeInject } from '@daria/utils';
import { ModalContext } from './types';

export const useModal = () => {
  return useSafeInject<ModalContext>(MODAL_INJECTION_KEY);
};
