import { useState } from 'react';

const useModal = (initialState = false): [boolean, { open: () => void, close: () => void }] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return [isOpen, { open, close }];
};

export default useModal;
