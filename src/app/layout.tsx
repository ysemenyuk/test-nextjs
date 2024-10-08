import type { Metadata } from 'next';
// import { MantineProvider } from '@mantine/core';
import { PrimeReactProvider } from 'primereact/api';
import { Cuprum } from 'next/font/google';

// import '@mantine/core/styles.css';
// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/fluent-light/theme.css';
// import 'primereact/resources/themes/lara-light-cyan/theme.css';

// import '../themes/fluent/theme.scss';
// import '../themes/orion/theme.scss';
import './globals.css';

import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';

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
        <PrimeReactProvider>
          <div className="wrapper">
            <Header className="header" />
            <main className="main">{children}</main>
            <Footer className="footer" />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
