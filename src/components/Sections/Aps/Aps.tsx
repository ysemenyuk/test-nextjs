import cn from 'classnames';
import styles from './Aps.module.scss';
import Image from 'next/image';

export const Aps = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.image)}>
        <Image alt={data.alt} src={data.image} />
      </div>
      <div className={cn(styles.text)}>
        <p>{data.text_1}</p>
        <p>{data.text_2}</p>
        <p>{data.text_3}</p>
      </div>
    </div>
  );
};
