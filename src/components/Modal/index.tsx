import { Component } from 'react';
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

class Modal extends Component<ModalProps> {
  el = document.createElement('div');

  constructor(props: ModalProps) {
    super(props);
  }

  componentDidMount() {
    if (modalRootEl) {
      modalRootEl.appendChild(this.el);
      modalRootEl.classList.add('open-modal');
      modalRootEl.dataset.testid = 'modal';
    }
  }

  componentWillUnmount() {
    modalRootEl?.removeChild(this.el);
    modalRootEl?.classList.remove('open-modal');
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
