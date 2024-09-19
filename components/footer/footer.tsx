import cn from 'classnames';
import styles from './footer.module.scss';

export const Footer = ({ className }: any): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)}>
      <div className={styles.action}>
        Мы будем рады видеть Вас в числе наших заказчиков!
      </div>
      <div className={styles.widgets}>
        <div className={styles.widgets_container}>
          <div>widget1</div>
          <div>widget2</div>
          <div>widget3</div>
          <div>widget4</div>
        </div>
      </div>
      <div className={styles.copyrigts}>
        <div className={styles.copyrigts_container}>
          <span>2012 - 2024 ООО "Орион" © Все права защищены.</span>
          <a>top</a>
        </div>
      </div>
    </footer>
  );
};
