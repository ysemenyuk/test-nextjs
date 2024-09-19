import cn from 'classnames';
import styles from './section.module.scss';

export const PageSection = ({ children, className }: any): JSX.Element => {
  return (
    <section className={cn(className, styles.section)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
