'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { PageSection } from '@/src/components/Section/Section';
import { PageTitle } from '@/src/components/PageTitle/PageTitle';
// import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';
// import useModal from '@/src/hooks/useModal';
import { FlexBox } from '@/src/components/UI/FlexBox/FlexBox';
import { Button } from '@/src/components/UI/Button/Button';

const pageTitle = {
  h1Top: 'проектирование, монтаж, обслуживание',
  h1Title: 'ПОЖАРНОЙ СИГНАЛИЗАЦИИ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Бесплатный осмотр объекта и расчет стоимости.',
  descLine2: 'Совместное прохождение проверки МЧС на объекте.',
};

export default function Page() {
  // const [isOpen, { open, close }] = useModal(false);

  return (
    <>
      <PageSection className={styles.headSection}>
        <PageTitle className={styles.pageTitle} {...pageTitle} />
        <FlexBox className={styles.btnTitleFlexBox}>
          <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
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
    </>
  );
}
