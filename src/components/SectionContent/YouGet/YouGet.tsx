import cn from 'classnames';
import styles from './YouGet.module.scss';
import Image from 'next/image';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <div className={cn(styles.image_wrapper)}>
      <Image alt={item.text_1} src={item.image} className={cn(styles.image)} />
    </div>
    <div className={cn(styles.text_wrapper)}>
      <h4 className={cn(styles.title)}>{item.text_1}</h4>
      <p className={cn(styles.text)}>{item.text_2}</p>
    </div>
  </div>
);

export const YouGet = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
