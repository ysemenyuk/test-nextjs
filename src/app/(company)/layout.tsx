import cn from 'classnames';
import styles from './layout.module.scss';
import * as companyData from '@/src/data/company/page';
import * as contactsData from '@/src/data/contacts/page';
// import * as pageData from '@/src/data/company/page';
// import * as pageData from '@/src/data/company/page';
import { main } from '@/src/data/main';

import { HeroCompact } from '@/src/components/HeroCompact/HeroCompact';
import { SedebaMenu } from '@/src/components/SidebarMenu/SidebarMenu';

const { sidebarMenu } = main;
const heroData: any = {
  '/company': companyData.heroCompact,
  '/contacts': contactsData.heroCompact,
  '/rekvizity': companyData.heroCompact,
  '/zayavka': companyData.heroCompact,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={styles.main}>
        <HeroCompact data={heroData} />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.content}>{children}</div>
            <div className={styles.sidebar}>
              <SedebaMenu menu={sidebarMenu} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
