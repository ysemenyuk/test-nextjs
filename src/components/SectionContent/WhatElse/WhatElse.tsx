import cn from 'classnames';
import styles from './whatElse.module.scss';
import Image from 'next/image';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <Image alt={item.text_1} src={item.image} className={cn(styles.image)} />
    <div className={cn(styles.text)}>{item.text_1}</div>
  </div>
);

export const WhatElse = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
