import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './footer.module.scss';

interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const PageSection = ({
  children,
  className,
}: PageProps): JSX.Element => {
  return (
    <section className={cn(className, styles.section)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
