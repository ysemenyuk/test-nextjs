import styles from './page.module.scss';
import Link from 'next/link';
import * as data from './data';

import { Section } from '@/src/components/SectionWrapper/Section';
import { Heading } from '@/src/components/SectionHeading/Heading';
import { Hero } from '@/src/components/Hero/Hero';
import { Uslugi } from '@/src/components/SectionContent/Uslugi/Uslugi';
import { Systems } from '@/src/components/SectionContent/Systems/Systems';
import { Numbers } from '@/src/components/SectionContent/Numbers/Numbers';
import { Objects } from '@/src/components/SectionContent/Objects/Objects';
import { WhyUs } from '@/src/components/SectionContent/WhyUs/WhyUs';
import { MyAlert } from '../components/SectionContent/Alert/Alert';
import { Aps } from '../components/SectionContent/Aps/Aps';
import { Soue } from '../components/SectionContent/Soue/Soue';
import { MyAccordion } from '../components/SectionContent/MyAccordion/MyAccordion';
import { YouGet } from '../components/SectionContent/YouGet/YouGet';
import { Brands } from '../components/SectionContent/Brands/Brands';
import { Documents } from '../components/SectionContent/Documents/Documents';
import { ActionWithButton } from '../components/SectionContent/ActionWithButton/ActionWithButton';
import { SendEmailModal } from '../components/Modals/SendEmailModal/SendEmailModal';

export default function Home() {
  const sections: any[] = [
    [Numbers, data.numbers],
    [Uslugi, data.uslugi],
    [Aps, data.aps],
    [Soue, data.soue],
    [Systems, data.pozharnyeSistemy, styles.gray_1],
    [Systems, data.ohrannyeSistemy, styles.gray_1],
    [Objects, data.objects],
    [ActionWithButton, {}, styles.bgForm_1],
    [WhyUs, data.whyUs],
    [Documents, data.docs, styles.gray_1],
    [Brands, data.brands],
    [YouGet, data.youGet],
    [MyAlert, data.alert],
    [MyAccordion, data.faq],
  ];

  return (
    <>
      <Hero data={data.hero} />

      {sections.map(([Content, data, ...classNames]) => {
        const [wrapper, heading, content] = classNames;
        return (
          <Section key={data.id} data={data.wrapper} className={wrapper}>
            {data.heading && (
              <Heading data={data.heading} className={heading} />
            )}
            <Content data={data.content} className={content} />
          </Section>
        );
      })}

      <SendEmailModal />
    </>
  );
}
