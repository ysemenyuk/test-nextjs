import cn from 'classnames';
import Image from 'next/image';
import styles from './section.module.scss';

export const Section = ({ children, className, data }: any): JSX.Element => {
  return (
    <section className={cn(className, styles.section)}>
      {data.bgImage && (
        <Image
          alt={data.altImage}
          src={data.bgImage}
          quality={100}
          className={styles.image}
          // style={{
          //   width: '100%',
          //   height: '100%',
          //   objectFit: 'cover',
          //   position: 'absolute',
          //   zIndex: '-1',
          // }}
        />
      )}
      <div className={cn(styles.container)}>{children}</div>
    </section>
  );
};
