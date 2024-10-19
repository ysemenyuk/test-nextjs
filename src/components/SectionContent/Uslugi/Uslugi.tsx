import cn from 'classnames';
import styles from './uslugi.module.scss';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <div className={cn(styles.icon_wrapper)}>{item.icon}</div>
    <div className={cn(styles.text_wrapper)}>
      <p>{item.text_1}</p>
      <p>{item.text_2}</p>
    </div>
  </div>
);

export const Uslugi = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
