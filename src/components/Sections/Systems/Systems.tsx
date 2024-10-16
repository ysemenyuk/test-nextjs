import cn from 'classnames';
import styles from './systems.module.scss';
import Image from 'next/image';
import { Heading } from '../../UI/Heading/Heading';
import { SectionWrapper } from '../../SectionWrapper/SectionWrapper';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <div className={cn(styles.image_wrapper)}>
      <Image height={180} alt={item.text_1} src={item.image} />
    </div>
    <div className={cn(styles.text_wrapper)}>
      <p>{item.text_1}</p>
      <p>{item.text_2}</p>
    </div>
  </div>
);

export const Systems = ({ data, classNames }: any): JSX.Element => {
  const items = data.items.map((item: any) => (
    <Item item={item} key={item.id} />
  ));

  return (
    <SectionWrapper data={data.section}>
      <div className={cn(styles.heading_container)}>
        <Heading data={data.heading} />
      </div>
      <div className={cn(styles.items_container)}>{items}</div>
    </SectionWrapper>
  );
};
