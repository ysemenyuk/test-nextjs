'use client';

import styles from './page.module.scss';
import Link from 'next/link';
import useModal from '@/src/hooks/useModal';
import { PageSection } from '@/src/components/Section/Section';
import { PageHeading } from '@/src/components/PageHeading/PageHeading';
import { FlexBox } from '../components/UI/FlexBox/FlexBox';
import { Button } from '../components/UI/Button/Button';
import Modal from '../components/ModalFramer/Modal';
import { send } from '@/src/app/actions';

const data = {
  h1Top: '',
  h1Title: 'КОМПЛЕКСНАЯ БЕЗОПАСНОСТЬ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Установка и обслуживание охранных и пожарных систем.',
  descLine2: 'Услуги в области пожарной безопасности.',
};

export default function Home() {
  const [isOpen, { open, close }] = useModal(false);

  const sendMessage = async () => {
    await send({ name: 'name', phone: '1234' });
    close();
  };

  return (
    <>
      <PageSection className={styles.headSection}>
        <PageHeading className={styles.pageTitle} {...data} />
        <FlexBox className={styles.btnTitleFlexBox}>
          <Button onClick={open} rounded>
            Оставить заявку
          </Button>
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

      <Modal isOpen={isOpen} onClose={close}>
        <h2>Hello</h2>
        <div>I am a modal</div>
        <button onClick={sendMessage}>sendMessage</button>
        <button onClick={close}>close</button>
      </Modal>
    </>
  );
}
