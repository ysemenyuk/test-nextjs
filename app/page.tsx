import styles from './page.module.scss';
import Link from 'next/link';
import { PageSection } from '@/components/Section/Section';
import { PageTitle } from '@/components/PageTitle/PageTitle';

const data = {
  h1Top: 'проектирование, монтаж, обслуживание',
  h1Title: 'ПОЖАРНОЙ СИГНАЛИЗАЦИИ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Бесплатный осмотр объекта и расчет стоимости.',
  descLine2: 'Совместное прохождение проверки МЧС на объекте.',
};

export default function Home() {
  return (
    <>
      <PageSection className={styles.headSection}>
        <PageTitle className={styles.pageTitle} {...data} />
      </PageSection>

      <PageSection>
        <Link href="/videonablyudenie">videonabludenie</Link>
      </PageSection>

      <PageSection>
        <Link href="/pozharnye-sistemy">pozharnye-sistemy</Link>
      </PageSection>

      <PageSection columns={4}>
        <div className={styles.col4}>div1</div>
        <div className={styles.col4}>div2</div>
        <div className={styles.col4}>div3</div>
        <div className={styles.col4}>div4</div>
      </PageSection>
    </>
  );
}
