'use client';

import cn from 'classnames';
import styles from './actionLight.module.scss';
import { Button } from '@/src/components/UI/Button/Button';
import { useCountStore } from '@/src/stores/modalStore';

export const ActionLight = ({ data, className }: any): JSX.Element => {
  const { open } = useCountStore();

  return (
    <div className={cn(className, styles.wrapper)}>
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>{data.title}</h4>
        <span className={styles.text}>{data.text}</span>
      </div>
      <Button rounded onClick={open} className={styles.btn}>
        {data.btnText}
      </Button>
    </div>
  );
};
