import cn from 'classnames';
import styles from './heading.module.scss';

export const Heading = ({ className, data }: any): JSX.Element | null => {
  return (
    <div className={cn(styles.heading, className)}>
      {data.sup && <span className={styles.sup}>{data.sup}</span>}
      <h2>{data.main}</h2>
      {data.sub && <span className={styles.sub}>{data.sub}</span>}
    </div>
  );
};
