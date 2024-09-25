'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { PageSection } from '@/src/components/Section/Section';
import { PageTitle } from '@/src/components/PageTitle/PageTitle';
import useModal from '@/src/hooks/useModal';
import Modal from '@/src/components/ModalFramer/Modal';
import { FlexBox } from '@/src/components/UI/FlexBox/FlexBox';
import { Button } from '@/src/components/UI/Button/Button';
import { pageTitle, uslugi } from './data';

export default function Page() {
  const [isOpen, { open, close }] = useModal(false);

  return (
    <>
      <PageSection key={'head'} className={styles.headSection}>
        <PageTitle className={styles.pageTitle} {...pageTitle} />
        <FlexBox className={styles.btnTitleFlexBox}>
          <Button onClick={open}>ОТПРАВИТЬ ЗАЯВКУ</Button>
        </FlexBox>
      </PageSection>

      <PageSection key={'section-1'}>
        <Link href="/">main page</Link>
      </PageSection>

      <PageSection key={'section-2'}>
        <Link href="/videonablyudenie">/videonabludenie</Link>
      </PageSection>

      <PageSection key={'section-3'}>
        <Link href="/pozharnaya-signalizaciya">/pozharnaya-signalizaciya</Link>
      </PageSection>

      <PageSection key={'section-4'}>
        {uslugi.map((item, i) => (
          <div key={i}>
            <div>{item.icon}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </PageSection>

      <Modal isOpen={isOpen} onClose={close}>
        <h2>Hello</h2>
        <div>I am a modal</div>
        <button onClick={close}>close</button>
      </Modal>
    </>
  );
}
