import styles from './page.module.scss';
import * as data from '../data/home';
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
// import { Soue } from '../components/SectionContent/Soue/Soue';
import { MyAccordion } from '../components/SectionContent/MyAccordion/MyAccordion';
import { YouGet } from '../components/SectionContent/YouGet/YouGet';
import { Brands } from '../components/SectionContent/Brands/Brands';
import { Documents } from '../components/SectionContent/Documents/Documents';
import { ActionDark } from '../components/SectionContent/ActionDark/ActionDark';
import { CallBackModal } from '../components/Modals/CallBackModal/CallBackModal';
import { ActionLight } from '../components/SectionContent/ActionLight/ActionLight';
import { WhatElse } from '../components/SectionContent/WhatElse/WhatElse';
// import { ApsTypes } from '../components/SectionContent/ApsTypes/ApsTypes';

export default function Home() {
  const sections: any[] = [
    [Numbers, data.numbers],
    [Uslugi, data.uslugi],
    // [ApsTypes, data.apsTypes],
    [Aps, data.aps],
    // [Soue, data.soue],
    [Systems, data.pozharnyeSistemy, styles.gray_1],
    // [Systems, data.ohrannyeSistemy, styles.gray_1],
    [Objects, data.objects],
    [ActionDark, data.actionDark, styles.dark_form],
    [WhyUs, data.whyUs],
    [Documents, data.docs, styles.gray_1],
    [Brands, data.brands],
    [YouGet, data.youGet],
    [MyAlert, data.alert],
    [WhatElse, data.whatElse],
    [MyAccordion, data.faq],
    [ActionLight, data.actionLight, styles.light_form],
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

      <CallBackModal />
    </>
  );
}
