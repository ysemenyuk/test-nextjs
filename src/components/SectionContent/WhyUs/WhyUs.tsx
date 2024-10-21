import cn from 'classnames';
import styles from './whyUs.module.scss';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <div className={cn(styles.icon_wrapper)}>{item.icon}</div>
    <div className={cn(styles.text_wrapper)}>
      <h4 className={cn(styles.title)}>{item.text_1}</h4>
      <p className={cn(styles.text)}>{item.text_2}</p>
    </div>
  </div>
);

export const WhyUs = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
