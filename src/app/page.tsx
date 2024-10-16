'use client';

import styles from './page.module.scss';
import Link from 'next/link';
import useModal from '@/src/hooks/useModal';
import { Button } from '@/src/components/UI/Button/Button';
import Modal from '@/src/components/ModalFramer/Modal';
import { send } from '@/src/app/actions';
import * as pageData from './data';
import { Hero } from '@/src/components/Sections/Hero/Hero';
import { Uslugi } from '@/src/components/Sections/Uslugi/Uslugi';
import { Systems } from '@/src/components/Sections/Systems/Systems';
import { Numbers } from '@/src/components/Sections/Numbers/Numbers';
import { Objects } from '../components/Sections/Objects/Objects';
import { WhyUs } from '../components/Sections/WhyUs/WhyUs';

export default function Home() {
  const [isOpen, { open, close }] = useModal(false);

  const sendMessage = async () => {
    await send({ name: 'name', phone: '1234' });
    close();
  };

  return (
    <>
      <Hero data={pageData.hero} />

      <Numbers data={pageData.numbers} />

      <Uslugi data={pageData.uslugi} />

      <Systems data={pageData.ohrannyeSistemy} />

      <Systems data={pageData.pozharnyeSistemy} />

      <Objects data={pageData.objects} />

      <WhyUs data={pageData.whyUs} />

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

        <Button primary onClick={open}>
          OpenModal
        </Button>
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
