import cn from 'classnames';
import styles from './heading.module.scss';

export const Heading = ({ className, data }: any): JSX.Element => {
  return (
    <div className={cn(className, styles.heading)}>
      <div className={styles.sup}>{data.sup}</div>
      <h2>{data.heading}</h2>
      <div className={styles.sub}>{data.sub}</div>
    </div>
  );
};
