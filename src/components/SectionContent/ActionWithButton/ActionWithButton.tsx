'use client';

import cn from 'classnames';
import styles from './actionWithButton.module.scss';
import { IconPointFilled } from '@tabler/icons-react';
import { Button } from '@/src/components/UI/Button/Button';
import { useCountStore } from '@/src/stores/modalStore';

const Title = ({ data }: any): JSX.Element => (
  <div className={styles.title_wrapper}>
    <div className={styles.title}>
      <div>{data.title}</div>
      <div>{data.sub_title}</div>
    </div>

    <div className={styles.sub_title}>
      <span>{data.text_1}</span>
      <IconPointFilled color={'#ff6600'} />
      <span>{data.text_2}</span>
      <IconPointFilled color={'#ff6600'} />
      <span>{data.text_3}</span>
    </div>
  </div>
);

export const ActionWithButton = ({ data, className }: any): JSX.Element => {
  const { open } = useCountStore();

  return (
    <div className={cn(className, styles.wrapper)}>
      <Title data={data} />
      <Button rounded onClick={open}>
        {data.btnText}
      </Button>
    </div>
  );
};
