import cn from 'classnames';
import styles from './pageHeading.module.scss';

export const PageHeading = ({ className, data }: any): JSX.Element => {
  return (
    <div className={cn(className, styles.heading)}>
      <div className={styles.sup}>{data.sup}</div>
      <h1>{data.heading}</h1>
      <div className={styles.sub}>{data.sub}</div>
      <hr />
      <div className={styles.description}>
        <div>{data.description_1}</div>
        <div>{data.description_2}</div>
        <div>{data.description_3}</div>
      </div>
    </div>
  );
};
