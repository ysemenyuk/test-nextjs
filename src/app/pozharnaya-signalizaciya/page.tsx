import Link from 'next/link';
import styles from './page.module.scss';
import { PageSection } from '@/src/components/Section/Section';
import { PageHeading } from '@/src/components/PageHeading/PageHeading';
import { FlexBox } from '@/src/components/UI/FlexBox/FlexBox';
import { Button } from '@/src/components/UI/Button/Button';
import { pageHeading } from './data';

export default function Page() {
  return (
    <>
      <PageSection className={styles.headSection}>
        <PageHeading className={styles.pageTitle} data={pageHeading} />
        <FlexBox className={styles.btnTitleFlexBox}>
          <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
        </FlexBox>
      </PageSection>
    </>
  );
}
