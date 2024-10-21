'use client';

import styles from './Modal.module.css';
import { FC, MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

interface IModalWProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: FC<IModalProps> = ({ children, onClose }) => {
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
  }, [onClose]);

  return ReactDOM.createPortal(
    <motion.div
      // ref={nodeRef}
      onClick={clickOnOverlay}
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

const ModalWrapper: FC<IModalWProps> = ({ isOpen, ...props }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && <Modal {...props} />}
    </AnimatePresence>
  );
};

export default ModalWrapper;
