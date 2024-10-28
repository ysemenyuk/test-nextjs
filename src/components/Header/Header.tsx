'use client';

import cn from 'classnames';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconPhone,
  IconPhoneIncoming,
  IconMail,
  IconMenu2,
} from '@tabler/icons-react';
import { useCountStore } from '@/src/stores/modalStore';
import { Button } from '../UI/Button/Button';
import { main } from '@/src/data/main';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { MenuItem, MenuItemWithSubmenu } from './MenuItem';

const { messengers, mainMenu, logo, contacts, leftText } = main;
const { adress, phone1, phone2, mail, callBack } = contacts;

export const Header = ({ className }: any): JSX.Element => {
  const { open } = useCountStore();

  const [isOpenMenu, menuActions] = useDisclosure(false);
  const [isOpenContacts, contactsActions] = useDisclosure(false);

  const mainMessengers = messengers.map((item: any) => (
    <li key={item.name}>
      <Link className={styles.messengers_item} href={item.href}>
        {item.icon}
      </Link>
    </li>
  ));

  const mobileMessengers = messengers.map((item: any) => (
    <li key={item.name}>
      <Link className={styles.messengers_item} href={item.href}>
        {item.icon}
      </Link>
    </li>
  ));

  const headerMenu = mainMenu.map((item: any) => {
    if (item.children) {
      return <MenuItemWithSubmenu key={item.text} item={item} />;
    }
    return <MenuItem key={item.text} item={item} />;
  });

  const mobileMenu = mainMenu.map((item: any) => (
    <li key={item.text}>
      <Link className={styles.menu_item} href={item.href}>
        {item.text} {item.icon}
      </Link>
    </li>
  ));

  return (
    <>
      <header className={cn(className, styles.header)}>
        <div className={styles.top_bar}>
          <div className={styles.top_bar_container}>
            <div className={styles.left}>{leftText}</div>
            <div className={styles.rigt}>
              <div className={styles.contacts}>
                <Link className={cn(styles.contacts_item)} href={phone1.href}>
                  <IconPhone />
                  {phone1.text}
                </Link>
                <Link className={cn(styles.contacts_item)} href={mail.href}>
                  <IconMail />
                  {mail.text}
                </Link>
                <Button
                  link
                  className={cn(styles.contacts_item_btn)}
                  onClick={open}
                >
                  <IconPhoneIncoming />
                  {callBack.text}
                </Button>
              </div>
              <ul className={styles.messengers}>{mainMessengers}</ul>
            </div>
          </div>
        </div>

        <div className={styles.main_bar}>
          <div className={styles.main_bar_container}>
            <div className={styles.btn_wrapper}>
              <button onClick={menuActions.open} className={styles.btn}>
                <IconMenu2 />
              </button>
            </div>
            <div className={styles.logo_container}>
              <Link className={styles.logoLink} href="/">
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  quality={100}
                  className={styles.logoImg}
                />
              </Link>
            </div>
            <nav className={styles.menu_container}>
              <ul className={styles.menu}>{headerMenu}</ul>
            </nav>
            <div className={styles.btn_wrapper}>
              <button onClick={contactsActions.open} className={styles.btn}>
                <IconPhone />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Drawer size="xs" opened={isOpenMenu} onClose={menuActions.close}>
        <div className={styles.mobileMenu_container}>
          <ul className={styles.mobileMenu}>{mobileMenu}</ul>
        </div>
      </Drawer>

      <Drawer
        size="xs"
        position="right"
        opened={isOpenContacts}
        onClose={contactsActions.close}
      >
        <div className={styles.mobileContacts_wrapper}>
          <h4>Наши контакты</h4>
          <div className={styles.mobileContacts}>
            <Link className={cn(styles.mobileContacts_item)} href={phone1.href}>
              <IconPhone />
              {phone1.text}
            </Link>
            <Link className={cn(styles.mobileContacts_item)} href={phone2.href}>
              <IconPhone />
              {phone2.text}
            </Link>
            <Link className={cn(styles.mobileContacts_item)} href={mail.href}>
              <IconMail />
              {mail.text}
            </Link>
          </div>
          <div className={styles.mobileContacts_adress}>{adress}</div>
          <ul className={styles.mobileContacts_messengers}>
            {mobileMessengers}
          </ul>
        </div>
      </Drawer>
    </>
  );
};
