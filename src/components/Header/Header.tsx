import cn from 'classnames';
import styles from './header.module.scss';
import Link from 'next/link';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

export const Header = ({ className }: any): JSX.Element => {
  return (
    <header className={cn(className, styles.header)}>
      <div className={styles.action_bar}>
        <div className={styles.action_bar_container}>
          <ul className={styles.contact_details}>
            <li className={styles.phone}>
              <HiOutlinePhone />
              <a href="tel:+7(499)702-45-65">+7 (499) 702-45-65</a>
            </li>
            <li className={styles.mail}>
              <HiOutlineMail />
              <a href="mailto:info@orionsb.ru">info@orionsb.ru</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.menu_bar}>
        <div className={styles.menu_bar_container}>
          <div className={styles.logo}>
            <Link href="/">logo1</Link>
          </div>
          <div className={styles.menu_wrapper}>menu</div>
        </div>
      </div>
    </header>
  );
};
