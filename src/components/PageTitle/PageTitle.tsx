import cn from 'classnames';
import styles from './pageTitle.module.scss';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export const PageTitle = ({
  className,
  h1Top,
  h1Title,
  h1Buttom,
  descLine1,
  descLine2,
}: any): JSX.Element => {
  return (
    <div className={cn(className, styles.title)}>
      <h1>
        <span>{h1Top}</span>
        <br />
        {h1Title}
      </h1>
      <div className={styles.subTitle}>
        <span>{h1Buttom}</span>
      </div>
      <hr />
      <div className={styles.description}>
        {descLine1}
        <br />
        {descLine2}
      </div>
    </div>
  );
};
