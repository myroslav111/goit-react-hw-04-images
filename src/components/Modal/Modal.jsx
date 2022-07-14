import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalPage, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ urlPhoto, closeModal }) => {
  // после рендера вызивается componentDidMount
  // вызывается при розмонтировании компонента чистит снимает слушателя

  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  });

  // фун. закрыти модалки по esc
  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
  // фун. закрыти модалки по backdrop
  const handleBakcdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBakcdropClick}>
      <ModalPage>
        <Img src={urlPhoto} alt="pfoto" />
      </ModalPage>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
