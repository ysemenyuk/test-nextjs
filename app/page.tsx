import styles from './page.module.scss';
import { PageSection } from '@/components/section/section';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
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
