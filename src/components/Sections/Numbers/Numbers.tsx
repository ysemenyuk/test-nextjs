import cn from 'classnames';
import styles from './numbers.module.scss';

const Item = ({ item }: any): JSX.Element => (
  <div className={cn(styles.item)}>
    <div className={cn(styles.head)}>
      <div>{item.head_1}</div>
      <div>{item.head_2}</div>
    </div>
    <hr />
    <div className={cn(styles.text)}>
      <div>{item.text_1}</div>
      <div>{item.text_2}</div>
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
