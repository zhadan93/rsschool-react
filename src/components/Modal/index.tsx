import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

type ModalProps = {
  className?: string;
  children: JSX.Element;
};

let modalRootEl = document.getElementById('modal-root');

if (!modalRootEl) {
  modalRootEl = document.createElement('div');
  modalRootEl.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRootEl);
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    if (modalRootEl) {
      modalRootEl.appendChild(el);
      modalRootEl.classList.add('open-modal');
      modalRootEl.dataset.testid = 'modal';
    }

    return () => {
      modalRootEl?.removeChild(el);
      modalRootEl?.classList.remove('open-modal');
    };
  }, [el]);

  return createPortal(children, el);
};

export default Modal;
