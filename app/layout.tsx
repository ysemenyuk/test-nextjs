import type { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Cuprum } from 'next/font/google';

import '@mantine/core/styles.css';
// import '@mantine/core/styles/global.css';
// import '@mantine/core/styles/Group.css';
// import '@mantine/core/styles/UnstyledButton.css';
// import '@mantine/core/styles/Button.css';

import './globals.scss';
import styles from './layout.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const cuprum = Cuprum({
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
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className={cuprum.className}>
        <MantineProvider theme={theme} classNamesPrefix="app">
          <div className={styles.wrapper}>
            <Header className={styles.header} />
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer} />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
