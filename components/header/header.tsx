import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './header.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <div className={styles.action_bar}>
        <div className={styles.action_bar_container}>
          <ul className={styles.contact_details}>
            <li className={styles.phone}>
              <a href="tel:+7(499)702-45-65">+7 (499) 702-45-65</a>
            </li>
            <li className={styles.mail}>
              <a href="mailto:info@orionsb.ru">info@orionsb.ru</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.top_bar}>
        <div className={styles.top_bar_container}>
          <div className={styles.logo}>logo</div>
          <div className={styles.menu_wrapper}>menu</div>
        </div>
      </div>
    </header>
  );
};
