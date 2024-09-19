import { HeadSection } from '@/components/HeadSection/HeadSection';
import styles from './page.module.scss';
import { PageSection } from '@/components/Section/Section';
import Link from 'next/link';

const props = {
  h1: 'ПОЖАРНОЙ СИГНАЛИЗАЦИИ',
  h1span: 'проектирование, монтаж, обслуживание',
  span: 'в Москве и Московской области',
  description: `Бесплатный осмотр и расчет стоимости.
          Совместное прохождение проверки МЧС на объекте.`,
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HeadSection {...props} />

      <PageSection>
        <Link href="/videonabludenie">videonabludenie</Link>
      </PageSection>

      <PageSection>
        <Link href="/pozharnye-sistemy/">pozharnye-sistemy</Link>
      </PageSection>

      <PageSection>
        <Link href="/pozharnye-sistemy/pozharnaya-signalizaciya/">
          pozharnaya-signalizaciya
        </Link>
      </PageSection>
    </main>
  );
}
