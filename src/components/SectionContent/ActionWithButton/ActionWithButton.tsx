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

const Heading = (): JSX.Element => (
  <div className={styles.title_wrapper}>
    <div className={styles.title}>
      <div>Оставьте заявку</div>
      <div>На бесплатный выезд инженера</div>
    </div>

    <div className={styles.sub_title}>
      <span>Изучит особенности объекта</span>
      <IconPointFilled color={'#ff6600'} />
      <span>Подберет оптимальное решение</span>
      <IconPointFilled color={'#ff6600'} />
      <span>Ответит на все вопросы</span>
    </div>
  </div>
);

export const ActionWithButton = ({ className }: any): JSX.Element => {
  const { open } = useCountStore((state) => state);

  return (
    <div className={cn(className, styles.wrapper)}>
      <Heading />

      <Button rounded onClick={open}>
        Отправить заявку
      </Button>
    </div>
  );
};
