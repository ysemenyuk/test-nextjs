import cn from 'classnames';
import styles from './systems.module.scss';
import Image from 'next/image';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <div className={cn(styles.image_wrapper)}>
      <Image height={180} alt={item.text_1} src={item.image} />
    </div>
    <div className={cn(styles.text_wrapper)}>
      <h4>{item.text_1}</h4>
      {/* <p>{item.text_2}</p> */}
    </div>
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
