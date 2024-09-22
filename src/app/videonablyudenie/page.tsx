'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { PageSection } from '@/src/components/Section/Section';
import { PageTitle } from '@/src/components/PageTitle/PageTitle';
import useModal from '@/src/hooks/useModal';
import Modal from '@/src/components/Modal/Modal';
import { FlexBox } from '@/src/components/UI/FlexBox/FlexBox';
import { Button } from '@/src/components/UI/Button/Button';

const pageTitle = {
  h1Top: 'проектирование, монтаж, обслуживание',
  h1Title: 'СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Бесплатный осмотр объекта и расчет стоимости.',
  descLine2: 'Современное оборудование, объекты любой сложности.',
};

export default function Page() {
  const [isOpen, { open, close }] = useModal();

  return (
    <>
      <PageSection className={styles.headSection}>
        <PageTitle className={styles.pageTitle} {...pageTitle} />
        <FlexBox className={styles.btnTitleFlexBox}>
          <Button onClick={open}>ОТПРАВИТЬ ЗАЯВКУ</Button>
        </FlexBox>
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

      <Modal isOpen={isOpen} onClose={close} title={`title`}>
        <h2>Hello</h2>
        <div>I am a modal</div>
        <button onClick={close}>close</button>
      </Modal>
    </>
  );
}
