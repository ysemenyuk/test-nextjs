import Link from 'next/link';
import styles from './page.module.scss';
import { PageSection } from '@/components/Section/Section';
import { PageTitle } from '@/components/PageTitle/PageTitle';

const pageTitle = {
  h1Top: 'проектирование, монтаж, обслуживание',
  h1Title: 'СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Бесплатный осмотр объекта и расчет стоимости.',
  descLine2: 'Современное оборудование, объекты любой сложности.',
};

export default function VideoPage() {
  return (
    <>
      <PageSection className={styles.headSection}>
        <PageTitle className={styles.pageTitle} {...pageTitle} />
      </PageSection>

      <PageSection>
        <Link href="/">main page</Link>
      </PageSection>
    </>
  );
}
