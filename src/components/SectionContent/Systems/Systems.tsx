import cn from 'classnames';
import styles from './systems.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <Link href={item.href} target={item.target}>
      <div className={cn(styles.image_wrapper)}>
        <Image
          height={180}
          alt={item.title}
          src={item.image}
          className={cn(styles.image)}
        />
      </div>
      <div className={cn(styles.text_wrapper)}>
        <h4>{item.title}</h4>
        {/* <p>{item.text}</p> */}
      </div>
    </Link>
  </div>
);

export const Systems = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
