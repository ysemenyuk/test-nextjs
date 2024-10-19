'use client';

import cn from 'classnames';
import styles from './actionWithButton.module.scss';
import { IconPointFilled } from '@tabler/icons-react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@/src/components/UI/Button/Button';
import { PhoneForm } from '../../Forms/PhoneForm/PhoneForm';
import useModal from '../../../hooks/useModal';
import { useCountStore } from '@/src/stores/modalStore';

export const SendEmailModal = ({ className }: any): JSX.Element => {
  const { isOpen, close } = useCountStore((state) => state);

  return (
    <Modal opened={isOpen} onClose={close} title="Authentication" centered>
      Send email
      <PhoneForm />
    </Modal>
  );
};
