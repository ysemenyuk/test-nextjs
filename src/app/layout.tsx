import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';

import './globals.css';
import '@mantine/core/styles.css';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const november = localFont({
  src: [
    {
      path: '../fonts/NovemberLCG-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/NovemberLCG-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NovemberLCG-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/NovemberLCG-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/NovemberLCG-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/NovemberLCG-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
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
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className={november.className}>
        <MantineProvider theme={theme}>
          <div className="wrapper">
            <Header className="header" />
            <main className="main">{children}</main>
            <Footer className="footer" />
            <ScrollToTop />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
