import cn from 'classnames';
import styles from './whatElse.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <Image alt={item.title} src={item.image} className={cn(styles.image)} />
    <h4 className={cn(styles.title)}>
      <Link href={item.href} target={item.target}>
        {item.title}
      </Link>
    </h4>
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
