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
import { YouGet } from '../components/Sections/YouGet/YouGet';
import { Brands } from '../components/Sections/Brands/Brands';
import { Documents } from '../components/Sections/Documents/Documents';

export default function Home() {
  const sections: any[] = [
    { id: 1, Content: Numbers, data: data.numbers },
    // { id: 2, Content: MyAlert, data: data.alert },
    { id: 3, Content: Uslugi, data: data.uslugi },
    { id: 4, Content: Aps, data: data.aps },
    { id: 5, Content: Soue, data: data.soue },

    { id: 6, Content: Systems, data: data.pozharnyeSistemy },
    { id: 7, Content: Systems, data: data.ohrannyeSistemy },

    { id: 8, Content: Objects, data: data.objects },
    { id: 9, Content: WhyUs, data: data.whyUs },
    { id: 10, Content: Documents, data: data.docs },

    { id: 11, Content: Brands, data: data.brands },
    { id: 12, Content: YouGet, data: data.youGet },
    { id: 13, Content: MyAccordion, data: data.faq },
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
    </>
  );
}
