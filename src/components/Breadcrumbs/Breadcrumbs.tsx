import cn from 'classnames';
import styles from './breadcrumbs.module.scss';

const demo = ['Home', 'Aps'];

export const Breadcrumbs = ({ className }: any): JSX.Element => {
  const items = demo.map((text: string, id: number) => (
    <li key={id}>{text}</li>
  ));

  return (
    <div className={cn(styles.breadcrumbs_container, className)}>
      <ul className={styles.breadcrumbs}>{items}</ul>
    </div>
  );
};
