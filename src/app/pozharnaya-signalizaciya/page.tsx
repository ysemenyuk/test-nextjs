import Link from 'next/link';
import styles from './page.module.scss';
// import { Button } from '@/src/components/UI/Button/Button';
import { Hero } from '@/src/components/Sections/Hero/Hero';

import { hero } from './data';

export default function Page() {
  return (
    <>
      <Hero data={hero} />

      <div
        style={{
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          width: '1180px',
          margin: '0 auto',
        }}
      >
        <div>
          <Link href="/">main page</Link>
        </div>
        <div>
          <Link href="/videonablyudenie">/videonabludenie</Link>
        </div>
        <div>
          <Link href="/pozharnaya-signalizaciya">
            /pozharnaya-signalizaciya
          </Link>
        </div>
      </div>
    </>
  );
}
