import cn from 'classnames';
import styles from './header.module.scss';
import Link from 'next/link';
import {
  HiOutlinePhone,
  HiOutlinePhoneIncoming,
  HiOutlineMail,
} from 'react-icons/hi';
import TelegramIcon from '../../../public/icons/icon_telegram.svg';
import WhatsappIcon from '../../../public/icons/icon_whatsapp.svg';
import VkIcon from '../../../public/icons/icon_vk.svg';
import LinkIcon from '../../../public/icons/icon_external_link.svg';
import ArrowDownIcon from '../../../public/icons/icon_arrow_down.svg';

export const Header = ({ className }: any): JSX.Element => {
  return (
    <header className={cn(className, styles.header)}>
      <div className={styles.action_bar}>
        <div className={styles.action_bar_container}>
          <div className={styles.left}>Работаем с 2013 г. Москва и МО.</div>

          <div className={styles.rigt}>
            <ul className={styles.contacts}>
              <li className={styles.contacts_item}>
                <HiOutlinePhoneIncoming className={styles.contacts_item_icon} />
                <a href="tel:+7(499)702-45-65">Перезвонить</a>
              </li>
              <li className={styles.contacts_item}>
                <HiOutlinePhone className={styles.contacts_item_icon} />
                <a className={styles.phone} href="tel:+7(499)702-45-65">
                  +7 (499) 702-45-65
                </a>
              </li>
              <li className={styles.contacts_item}>
                <HiOutlineMail className={styles.contacts_item_icon} />
                <a href="mailto:info@orionsb.ru">info@orionsb.ru</a>
              </li>
            </ul>

            <ul className={styles.messagers}>
              <li className={styles.messagers_item}>
                <WhatsappIcon />
              </li>
              <li className={styles.messagers_item}>
                <TelegramIcon />
              </li>
              <li className={styles.messagers_item}>
                <VkIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.menu_bar}>
        <div className={styles.menu_bar_container}>
          <div className={styles.logo}>
            <Link href="/">logo1</Link>
          </div>

          <div className={styles.menu_container}>
            <ul className={styles.menu}>
              <li>
                <Link className={styles.menu_item} href="/">
                  О_компании
                </Link>
              </li>
              <li>
                <Link className={styles.menu_item} href="/">
                  Системы <ArrowDownIcon />
                </Link>
              </li>
              <li>
                <Link className={styles.menu_item} href="/">
                  Услуги <ArrowDownIcon />
                </Link>
              </li>
              <li>
                <Link className={styles.menu_item} href="/">
                  Магазин <LinkIcon />
                </Link>
              </li>
              <li>
                <Link className={styles.menu_item} href="/">
                  Блог
                </Link>
              </li>
              <li>
                <Link className={styles.menu_item} href="/">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
