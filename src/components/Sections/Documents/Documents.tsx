import cn from 'classnames';
import styles from './Documents.module.scss';
import Image from 'next/image';
import { IconClipboardText } from '@tabler/icons-react';

const Item = ({ item }: any): JSX.Element => (
  <li className={cn(styles.item)}>
    <div className={cn(styles.icon)}>
      <IconClipboardText size={16} />
    </div>
    <div className={cn(styles.text)}>
      <p>{item.text_1}</p>
      <p>{item.text_2}</p>
    </div>
  </li>
);

export const Documents = ({ data, className }: any): JSX.Element => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.image)}>
        <Image alt={data.altImage} src={data.image} />
      </div>
      <ul className={cn(styles.list)}>
        {data.list.map((item: any) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
