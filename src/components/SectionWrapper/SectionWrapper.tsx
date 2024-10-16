import cn from 'classnames';
import Image from 'next/image';
import styles from './sectionWrapper.module.scss';

export const SectionWrapper = ({
  children,
  className,
  data,
}: any): JSX.Element => {
  return (
    <section
      style={{
        backgroundColor: data.bgColor,
      }}
      className={cn(className, styles.section)}
    >
      {data.bgImage ?? (
        <Image
          alt={data.altImage}
          src={data.bgImage}
          quality={100}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: '-1',
          }}
        />
      )}
      {children}
    </section>
  );
};
