import cn from 'classnames';
import styles from './aps.module.scss';
import Image from 'next/image';

export const Aps = ({ data, className }: any): JSX.Element => {
  const text = data.text.map((text: string) => <p key={text}>{text}</p>);

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.image)}>
        <Image
          alt={data.alt}
          src={data.image}
          style={{
            width: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <div className={cn(styles.block)}>
        <h3 className={cn(styles.title)}>{data.title}</h3>
        <div className={cn(styles.text)}>{text}</div>
      </div>
    </div>
  );
};
