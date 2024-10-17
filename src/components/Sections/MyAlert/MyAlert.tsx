import cn from 'classnames';
import styles from './MyAlert.module.scss';
// import { Alert } from '@mantine/core';

export const MyAlert = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.icon}>{data.icon}</div>
      <div className={styles.text}>
        <div className={styles.title}>{data.title}</div>
        <p>{data.text_1}</p>
        <p>{data.text_2}</p>
        <p>{data.text_3}</p>
      </div>
    </div>
  );
};
