import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#root');

const Modal = ({ modalData, onClick }) => {
  useEffect(() => {
    const hendleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', hendleKeyDown);

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClick]);

  const hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return createPortal(
    <Overlay onClick={hendleOverlayClick}>
      <ModalContent>
        <>RERECB</>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
