import cn from 'classnames';
import styles from './aps.module.scss';
import Image from 'next/image';

export const Aps = ({ data, className }: any): JSX.Element => {
  const text = data.text.map((text: string) => <p key={text}>{text}</p>);

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.image_wrapper)}>
        <Image alt={data.alt} src={data.image} className={cn(styles.image)} />
      </div>
      <div className={cn(styles.block)}>
        <h3 className={cn(styles.title)}>{data.title}</h3>
        <div className={cn(styles.text)}>{text}</div>
      </div>
    </div>
  );
};
