import cn from 'classnames';
import styles from './MyAccordion.module.scss';
import { Accordion } from '@mantine/core';

export const MyAccordion = ({ data, className }: any): JSX.Element => {
  const items = data.map((item: any) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className={cn(styles.container, className)}>
      <Accordion chevronPosition="left" defaultValue={data[0].value}>
        {items}
      </Accordion>
    </div>
  );
};
