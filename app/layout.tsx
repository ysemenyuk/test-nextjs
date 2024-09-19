import type { Metadata } from 'next';
import { Cuprum } from 'next/font/google';
import './globals.scss';
import styles from './layout.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const roboto = Cuprum({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'title',
  description: 'description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <main className={styles.main}>{children}</main>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
