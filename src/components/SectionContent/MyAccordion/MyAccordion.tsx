'use client';

import cn from 'classnames';
import styles from './MyAccordion.module.scss';
import { Accordion } from '@mantine/core';
import { IconZoomQuestion } from '@tabler/icons-react';

export const MyAccordion = ({ data, className }: any): JSX.Element => {
  const renerDescription = (description: string[]) =>
    description.map((text: string, id) => (
      <p key={id} className={styles.p}>
        {text}
      </p>
    ));

  const items = data.map((item: any) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={<IconZoomQuestion color={'#ff6600'} />}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{renerDescription(item.description)}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className={cn(styles.container, className)}>
      <Accordion
        variant="separated"
        defaultValue={data[0].value}
        classNames={styles}
      >
        {items}
      </Accordion>
    </div>
  );
};
