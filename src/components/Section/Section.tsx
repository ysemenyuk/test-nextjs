import cn from 'classnames';
import styles from './section.module.scss';

export const PageSection = ({
  columns = 1,
  children,
  className,
}: any): JSX.Element => {
  return (
    <section className={cn(className, styles.section)}>
      <div className={cn(styles.container, { [styles.col4]: columns === 4 })}>
        {children}
      </div>
    </section>
  );
};
