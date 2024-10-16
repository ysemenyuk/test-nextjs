import cn from 'classnames';
import styles from './whyUs.module.scss';
import { Heading } from '../../UI/Heading/Heading';
import { SectionWrapper } from '../../SectionWrapper/SectionWrapper';

const Item = ({ item }: any): JSX.Element => (
  <div key={item.id} className={cn(styles.item)}>
    <div className={cn(styles.icon_wrapper)}>{item.icon}</div>
    <div className={cn(styles.text_wrapper)}>
      <p className={cn(styles.heading)}>{item.text_1}</p>
      <p className={cn(styles.text)}>{item.text_2}</p>
    </div>
  </div>
);

export const WhyUs = ({ data }: any): JSX.Element => {
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
