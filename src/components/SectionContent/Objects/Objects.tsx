import cn from 'classnames';
import styles from './objects.module.scss';
import Image from 'next/image';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <Image alt={item.text_1} src={item.image} className={cn(styles.image)} />
    <h4 className={cn(styles.text)}>{item.text_1}</h4>
  </div>
);

export const Objects = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
