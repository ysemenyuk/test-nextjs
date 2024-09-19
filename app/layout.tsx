import type { Metadata } from 'next';
import { Cuprum } from 'next/font/google';
import './globals.css';
import styles from './layout.module.scss';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

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
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
