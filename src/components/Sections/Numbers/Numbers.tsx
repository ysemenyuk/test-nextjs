import cn from 'classnames';
import styles from './numbers.module.scss';

export const Numbers = ({ children, className }: any): JSX.Element => {
  return (
    <section className={cn(className, styles.section)}>
      <div className={cn(styles.container)}>{children}</div>
    </section>
  );
};
