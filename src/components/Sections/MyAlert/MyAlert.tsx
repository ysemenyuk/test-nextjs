import cn from 'classnames';
import styles from './MyAlert.module.scss';
import { Alert } from '@mantine/core';

export const MyAlert = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      <Alert
        variant={data.variant}
        color={data.color}
        title={data.title}
        icon={data.icon}
        radius="md"
      >
        <p>{data.text_1}</p>
        <p>{data.text_2}</p>
        <p>{data.text_3}</p>
      </Alert>
    </div>
  );
};
