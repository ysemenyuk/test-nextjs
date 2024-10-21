'use client';

import cn from 'classnames';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IconPhone, IconPhoneIncoming, IconMail } from '@tabler/icons-react';

import { header } from '@/src/data/header';
import { useCountStore } from '@/src/stores/modalStore';
const { messengers, menu, logo, contacts, leftText } = header;
const { callBack, phone, mail } = contacts;

export const Header = ({ className }: any): JSX.Element => {
  const { open } = useCountStore();

  const messengersItems = messengers.map((item: any) => (
    <li key={item.name}>
      <Link className={styles.messengers_item} href={item.href}>
        {item.icon}
      </Link>
    </li>
  ));

  const menuItems = menu.map((item: any) => (
    <li key={item.text}>
      <Link className={styles.menu_item} href={item.href}>
        {item.text} {item.icon}
      </Link>
    </li>
  ));

  return (
    <header className={cn(className, styles.header)}>
      <div className={styles.top_bar}>
        <div className={styles.top_bar_container}>
          <div className={styles.left}>{leftText}</div>
          <div className={styles.rigt}>
            <ul className={styles.contacts}>
              <li>
                <button
                  className={cn(styles.contacts_item, styles.callBack)}
                  onClick={open}
                >
                  <IconPhoneIncoming className={styles.contacts_item_icon} />
                  {callBack.text}
                </button>
              </li>
              <li>
                <Link
                  className={cn(styles.contacts_item, styles.phone)}
                  href={phone.href}
                >
                  <IconPhone className={styles.contacts_item_icon} />
                  {phone.text}
                </Link>
              </li>
              <li>
                <Link
                  className={cn(styles.contacts_item, styles.mail)}
                  href={mail.href}
                >
                  <IconMail className={styles.contacts_item_icon} />
                  {mail.text}
                </Link>
              </li>
            </ul>

            <ul className={styles.messengers}>{messengersItems}</ul>
          </div>
        </div>
      </div>

      <div className={styles.main_bar}>
        <div className={styles.main_bar_container}>
          <div className={styles.logo_container}>
            <Link className={styles.logo} href="/">
              <Image alt={logo.alt} height={50} src={logo.src} quality={100} />
            </Link>
          </div>

          <div className={styles.menu_container}>
            <ul className={styles.menu}>{menuItems}</ul>
          </div>
        </div>
      </div>
    </header>
  );
};
