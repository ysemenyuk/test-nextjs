import cn from 'classnames';
import styles from './page.module.scss';
import * as pageData from '@/src/data/contacts/page';
import { main } from '@/src/data/main';
import Link from 'next/link';

const { contacts, messengers } = main;
const { adress2, phone1, phone2, mail } = contacts;

export default function Page() {
  return (
    <>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <h4>Телефоны:</h4>
          <div className={cn(styles.items)}>
            <Link className={cn(styles.item)} href={phone1.href}>
              {phone1.text}
            </Link>
            <Link className={cn(styles.item)} href={phone2.href}>
              {phone2.text}
            </Link>
          </div>
        </div>
        <div className={styles.col1}>
          <h4>E-mail:</h4>
          <div className={cn(styles.items)}>
            <Link className={cn(styles.item)} href={mail.href}>
              {mail.text}
            </Link>
            <Link className={cn(styles.item)} href={mail.href}>
              {mail.text}
            </Link>
          </div>
        </div>
        <div className={styles.col1}>
          <h4>Мессенджеры:</h4>
          <ul className={cn(styles.items)}>
            {messengers.map((item: any) => (
              <li key={item.name}>
                <Link className={styles.item} href={item.href}>
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.col1}>
          <h4>Время работы:</h4>
          <div
            className={cn(styles.items)}
          >{`пн.- пт. - 10:00 до 18:00\nсб.- вс. - выходные`}</div>
        </div>
        <div className={styles.col1}>
          <h4>Адрес:</h4>
          <div className={cn(styles.items)}>{adress2}</div>
        </div>
      </div>
      <div className={styles.map}></div>
    </>
  );
}
