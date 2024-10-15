import cn from 'classnames';
import styles from './heading.module.scss';

export const Heading = ({ className, data }: any): JSX.Element => {
  return (
    <div className={cn(styles.heading, className)}>
      {data.sup ?? <div className={styles.sup}>{data.sup}</div>}
      <h2>{data.main}</h2>
      {data.sub ?? <div className={styles.sub}>{data.sub}</div>}
    </div>
  );
};
