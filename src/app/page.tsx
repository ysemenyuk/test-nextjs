'use client';

import styles from './page.module.scss';
import Link from 'next/link';
import useModal from '@/src/hooks/useModal';
// import { Button } from '../components/UI/Button/Button';
import Modal from '@/src/components/ModalFramer/Modal';
import { send } from '@/src/app/actions';
import { Hero } from '@/src/components/Sections/Hero/Hero';
import { Uslugi } from '@/src/components/Sections/Uslugi/Uslugi';
import { hero, uslugi } from './data';

export default function Home() {
  const [isOpen, { open, close }] = useModal(false);

  const sendMessage = async () => {
    await send({ name: 'name', phone: '1234' });
    close();
  };

  return (
    <>
      <Hero data={hero} />

      <Uslugi data={uslugi} />

      <div
        style={{
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
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

      <Modal isOpen={isOpen} onClose={close}>
        <h2>Hello</h2>
        <div>I am a modal</div>
        <button onClick={sendMessage}>sendMessage</button>
        <button onClick={close}>close</button>
      </Modal>
    </>
  );
}
