import React from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

export const modalRootEl = document.getElementById('modal-root');

type ModalProps = {
  className?: string;
  children: JSX.Element;
  onClose?: () => void;
  isOpen: boolean;
};

const Modal = ({ children, isOpen }: ModalProps) => {
  const modalClassName = 'modal-root';
  isOpen
    ? modalRootEl?.classList.add(modalClassName)
    : modalRootEl?.classList.remove(modalClassName);

  return modalRootEl && isOpen ? createPortal(<>{children}</>, modalRootEl) : null;
};

export default Modal;
