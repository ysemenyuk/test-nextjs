import cn from 'classnames';
import styles from './breadcrumbs.module.scss';
import { IconHome } from '@tabler/icons-react';

const demo = ['>', 'Пожарная сигнализация'];

export const Breadcrumbs = ({ className }: any): JSX.Element => {
  const items = demo.map((item: string, id: number) => (
    <li key={id}>{item}</li>
  ));

  return (
    <div className={cn(styles.breadcrumbs_container, className)}>
      <IconHome />
      <ul className={styles.breadcrumbs}>{items}</ul>
    </div>
  );
};
