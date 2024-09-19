import styles from './page.module.scss';
import { PageSection } from '@/components/Section/Section';
import Link from 'next/link';

export default function VideoPage() {
  return (
    <main className={styles.main}>
      <PageSection>
        <Link href="/">main page</Link>
      </PageSection>
    </main>
  );
}
