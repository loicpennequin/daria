import { MODAL_INJECTION_KEY } from '@/constants';
import { useSafeInject } from '@/hooks';
import { ModalContext } from './d-modal.types';

export const useModal = () => {
  return useSafeInject<ModalContext>(MODAL_INJECTION_KEY);
};
