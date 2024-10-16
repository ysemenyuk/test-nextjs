import cn from 'classnames';
import styles from './numbers.module.scss';
import Image from 'next/image';
import { SectionWrapper } from '../../SectionWrapper/SectionWrapper';

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

export const Numbers = ({ data, classNames }: any): JSX.Element => {
  const items = data.items.map((item: any) => (
    <Item item={item} key={item.id} />
  ));

  return (
    <SectionWrapper data={data.section}>
      <div className={cn(styles.items_container)}>{items}</div>
    </SectionWrapper>
  );
};
