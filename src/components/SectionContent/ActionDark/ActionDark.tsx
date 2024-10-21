'use client';

import cn from 'classnames';
import styles from './actionDark.module.scss';
import { IconPointFilled } from '@tabler/icons-react';
import { Button } from '@/src/components/UI/Button/Button';
import { useCountStore } from '@/src/stores/modalStore';

export const ActionDark = ({ data, className }: any): JSX.Element => {
  const { open } = useCountStore();

  return (
    <div className={cn(className, styles.wrapper)}>
      <div className={styles.title_wrapper}>
        <div className={styles.title}>
          <div>{data.title_1}</div>
          <div>{data.title_2}</div>
        </div>
        <div className={styles.sub_title}>
          <span>{data.text_1}</span>
          <IconPointFilled color={'#ff6600'} />
          <span>{data.text_2}</span>
          <IconPointFilled color={'#ff6600'} />
          <span>{data.text_3}</span>
        </div>
      </div>

      <Button rounded onClick={open}>
        {data.btnText}
      </Button>
    </div>
  );
};
