import cn from 'classnames';
import styles from './header.module.scss';

export const Header = ({ className }: any): JSX.Element => {
  return (
    <header className={cn(className, styles.header)}>
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
