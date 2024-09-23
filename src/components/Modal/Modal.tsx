'use client';

import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import styles from './Modal.module.css';
import { RefObject, FC, MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IModalProps {
  children: React.ReactNode;
  title: string;
  nodeRef: RefObject<HTMLInputElement>;
  onClose: () => void;
}

interface IModalWProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: FC<IModalProps> = ({ children, onClose, title, nodeRef }) => {
  const modalRoot = document.body as HTMLElement;

  const clickOnOverlay = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') onClose();
    };

    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
    document.body.dataset.scrollLock = 'true';

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      delete document.body.dataset.scrollLock;

      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div ref={nodeRef} onClick={clickOnOverlay} className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

const ModalWrapper: FC<IModalWProps> = ({ isOpen, ...props }) => {
  const nodeRef = useRef<HTMLInputElement>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={200}
      unmountOnExit
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <Modal {...props} nodeRef={nodeRef} />
    </CSSTransition>
  );
};

export default ModalWrapper;
