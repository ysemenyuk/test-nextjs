'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { PageSection } from '@/src/components/Section/Section';
import { PageTitle } from '@/src/components/PageTitle/PageTitle';
import useModal from '@/src/hooks/useModal';
import Modal from '@/src/components/Modal/Modal';
import { FlexBox } from '@/src/components/UI/FlexBox/FlexBox';
import { Button } from '@/src/components/UI/Button/Button';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css';

const pageTitle = {
  h1Top: 'проектирование, монтаж, обслуживание',
  h1Title: 'СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Бесплатный осмотр объекта и расчет стоимости.',
  descLine2: 'Современное оборудование, объекты любой сложности.',
};

export default function Page() {
  const [isOpen, { open, close }] = useModal(false);

  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

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
        <Button onClick={() => setShowMessage(true)}>Show Message</Button>
        <CSSTransition
          in={showMessage}
          nodeRef={nodeRef}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <div ref={nodeRef}>
            <div>Animated alert message</div>
            <p>
              This alert message is being transitioned in and out of the DOM.
            </p>
            <Button onClick={() => setShowMessage(false)}>Close</Button>
          </div>
        </CSSTransition>
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
