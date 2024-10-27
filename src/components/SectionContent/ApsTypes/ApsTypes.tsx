import cn from 'classnames';
import styles from './apsTypes.module.scss';
import Image from 'next/image';
import { Spoiler } from '@mantine/core';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <Image height={180} alt={item.alt} src={item.image} />
    <div className={cn(styles.text_wrapper)}>
      <h4>{item.title}</h4>
      <div className={cn(styles.text)}>
        {/* {item.text.map((text: string, id: number) => (
          <p key={id} className={styles.p}>
            {text}
          </p>
        ))} */}
        <Spoiler showLabel="Подробнее" hideLabel="Скрыть">
          {item.text.map((text: string, id: number) => (
            <p key={id} className={styles.p}>
              {text}
            </p>
          ))}
        </Spoiler>
      </div>
    </div>
  </div>
);

export const ApsTypes = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
