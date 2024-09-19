import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './footer.module.scss';

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
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
