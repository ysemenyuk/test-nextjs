import cn from 'classnames';
import styles from './uslugi.module.scss';
import { Heading } from '../../UI/Heading/Heading';
import { SectionWrapper } from '../../SectionWrapper/SectionWrapper';

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
