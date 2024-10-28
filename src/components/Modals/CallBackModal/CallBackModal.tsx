'use client';

import cn from 'classnames';
import styles from './callBackModal.module.scss';
import { Modal } from '@mantine/core';
import { PhoneForm } from '../../Forms/PhoneForm/PhoneForm';
import { useCountStore } from '@/src/stores/modalStore';
import Link from 'next/link';

export const CallBackModal = (): JSX.Element => {
  const { isOpen, close } = useCountStore((state) => state);

  return (
    <Modal opened={isOpen} onClose={close} centered>
      <div className={cn(styles.wrapper)}>
        <div className={styles.heading}>
          <h3>Оперативно перезвоним</h3>
          <p>
            И подробно ответим на любые вопросы о наших услугах и условиях
            работы
          </p>
        </div>

        <PhoneForm close={close} />

        <div className={styles.privacy}>
          <p>
            Отправляя форму вы соглашаетесь на обработку персональных данных.
            <Link href="#">Правила обработки.</Link>
          </p>
        </div>
      </div>
    </Modal>
  );
};
