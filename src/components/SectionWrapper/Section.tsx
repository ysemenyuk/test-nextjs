import cn from 'classnames';
import Image from 'next/image';
import styles from './section.module.scss';

export const Section = ({ children, className, data }: any): JSX.Element => {
  return (
    <section
      style={{ backgroundColor: data && data.bgColor }}
      className={cn(styles.section, className)}
    >
      {data && data.bgImage && (
        <Image
          alt={data.altImage}
          src={data.bgImage}
          quality={100}
          className={styles.image}
        />
      )}
      <div className={cn(styles.container)}>{children}</div>
    </section>
  );
};
