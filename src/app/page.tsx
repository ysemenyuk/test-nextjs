'use client';

import styles from './page.module.scss';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { Button, Flex, Space } from '@mantine/core';
import { Modal } from '@mantine/core';
import { PageSection } from '@/src/components/Section/Section';
import { PageTitle } from '@/src/components/PageTitle/PageTitle';

const data = {
  h1Top: '',
  h1Title: 'КОМПЛЕКСНАЯ БЕЗОПАСНОСТЬ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Установка и обслуживание охранных и пожарных систем.',
  descLine2: 'Услуги в области пожарной безопасности.',
};

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <PageSection className={styles.headSection}>
        <PageTitle className={styles.pageTitle} {...data} />
        <Space h="md" />
        <Flex justify="center" align="center">
          <Button onClick={open}>ОТПРАВИТЬ ЗАЯВКУ</Button>
        </Flex>
      </PageSection>

      <PageSection>
        <Link href="/">main page</Link>
      </PageSection>

      <PageSection>
        <Link href="/videonablyudenie">/videonabludenie</Link>
      </PageSection>

      <PageSection>
        <Link href="/pozharnaya-signalizaciya">/pozharnaya-signalizaciya</Link>
      </PageSection>

      <Modal opened={opened} onClose={close}>
        <h2>Hello</h2>
        <div>I am a modal</div>
        <button onClick={close}>close</button>
      </Modal>
    </>
  );
}
