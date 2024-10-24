import cn from 'classnames';
import styles from './numbers.module.scss';

const Item = ({ item }: any): JSX.Element => (
  <div className={cn(styles.item)}>
    <div className={cn(styles.head)}>
      <div className={cn(styles.head_1)}>{item.head_1}</div>
      <div className={cn(styles.head_2)}>{item.head_2}</div>
    </div>
    <hr />
    <div className={cn(styles.text)}>
      <span>{item.text_1}</span>
    </div>
  </div>
);

export const Numbers = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
