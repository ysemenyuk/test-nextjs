import cn from 'classnames';
import styles from './footer.module.scss';
import { main } from '@/src/data/main';
import Link from 'next/link';
import { IconMail, IconPhone } from '@tabler/icons-react';

const {
  footerSlogan,
  copyText,
  privacy,
  uslugiMenu,
  systemsMenu,
  contacts,
  messengers,
} = main;

const { adress, phone1, phone2, mail } = contacts;

export const Footer = ({ className }: any): JSX.Element => {
  const uslugiContent = uslugiMenu.content.map((item: any) => (
    <li key={item.text}>
      <Link href={item.href} className={styles.link}>
        {item.text}
      </Link>
    </li>
  ));

  const systemsContent = systemsMenu.content.map((item: any) => (
    <li key={item.text}>
      <Link href={item.href} className={styles.link}>
        {item.text}
      </Link>
    </li>
  ));

  const messengerslist = messengers.map((item: any) => (
    <li key={item.name}>
      <Link className={styles.messengers_item} href={item.href}>
        {item.icon}
      </Link>
    </li>
  ));

  return (
    <footer className={cn(className, styles.footer)}>
      <div className={styles.action}>{footerSlogan}</div>
      <div className={styles.widgets}>
        <div className={styles.widgets_container}>
          <div>
            <h4>{uslugiMenu.title}</h4>
            <ul>{uslugiContent}</ul>
          </div>
          <div>
            <h4>{systemsMenu.title}</h4>
            <ul>{systemsContent}</ul>
          </div>
          <div>
            <h4>{contacts.title}</h4>
            <div className={styles.contacts}>
              <Link className={cn(styles.contacts_item)} href={phone1.href}>
                <IconPhone />
                {phone1.text}
              </Link>
              <Link className={cn(styles.contacts_item)} href={phone2.href}>
                <IconPhone />
                {phone2.text}
              </Link>
              <Link className={cn(styles.contacts_item)} href={mail.href}>
                <IconMail />
                {mail.text}
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.company}>
              <div className={styles.adress}>{adress}</div>
              <ul className={styles.messengers}>{messengerslist}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrigts}>
        <div className={styles.copyrigts_container}>
          <span>{copyText}</span>
          <Link href={privacy.href}>{privacy.text}</Link>
        </div>
      </div>
    </footer>
  );
};
