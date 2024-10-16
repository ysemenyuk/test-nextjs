'use client';

import styles from './page.module.scss';
import Link from 'next/link';
import useModal from '@/src/hooks/useModal';
import { Button } from '@/src/components/UI/Button/Button';
import Modal from '@/src/components/ModalFramer/Modal';
import { send } from '@/src/app/actions';
import * as data from './data';
import { Hero } from '@/src/components/Sections/Hero/Hero';
import { Uslugi } from '@/src/components/Sections/Uslugi/Uslugi';
import { Systems } from '@/src/components/Sections/Systems/Systems';
import { Numbers } from '@/src/components/Sections/Numbers/Numbers';
import { Objects } from '@/src/components/Sections/Objects/Objects';
import { WhyUs } from '@/src/components/Sections/WhyUs/WhyUs';
import { Section } from '@/src/components/Section/Section';
import { Heading } from '@/src/components/UI/Heading/Heading';
import { MyAlert } from '../components/Sections/MyAlert/MyAlert';
import { Aps } from '../components/Sections/Aps/Aps';
import { Soue } from '../components/Sections/Soue/Soue';
import { MyAccordion } from '../components/Sections/MyAccordion/MyAccordion';

export default function Home() {
  const [isOpen, { open, close }] = useModal(false);

  const sendMessage = async () => {
    await send({ name: 'name', phone: '1234' });
    close();
  };

  const sections: any[] = [
    { id: 1, Content: Numbers, data: data.numbers },
    { id: 2, Content: MyAlert, data: data.alert },
    { id: 3, Content: Uslugi, data: data.uslugi },
    { id: 4, Content: Aps, data: data.aps },
    { id: 5, Content: Soue, data: data.soue },
    { id: 5, Content: MyAccordion, data: data.faq },

    // { id: 3, Content: Systems, data: data.ohrannyeSistemy },
    // { id: 4, Content: Systems, data: data.pozharnyeSistemy },
    // { id: 5, Content: Objects, data: data.objects },
    // { id: 6, Content: WhyUs, data: data.whyUs },
  ];

  return (
    <>
      <Hero data={data.hero} />

      {sections.map(({ id, Content, data, cn }) => (
        <Section key={id} data={data.wrapper} className={cn}>
          <Heading data={data.heading} />
          <Content data={data.content} />
        </Section>
      ))}

      <div
        style={{
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          margin: '50px auto',
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
