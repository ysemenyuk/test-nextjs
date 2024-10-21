import cn from 'classnames';
import styles from './footer.module.scss';
import { footer } from '@/src/data/footer';

const { top_text, copy_text, widget_1, widget_2, widget_3, widget_4 } = footer;

export const Footer = ({ className }: any): JSX.Element => {
  const content_2 = widget_2.content.map((item: string) => (
    <li key={item}>{item}</li>
  ));

  const content_3 = widget_3.content.map((item: string) => (
    <li key={item}>{item}</li>
  ));

  const content_4 = widget_4.content.map((item: string) => (
    <li key={item}>{item}</li>
  ));

  return (
    <footer className={cn(className, styles.footer)}>
      <div className={styles.action}>{top_text}</div>
      <div className={styles.widgets}>
        <div className={styles.widgets_container}>
          <div>
            <h4>{widget_1.title}</h4>
            <p>{widget_1.content}</p>
          </div>
          <div>
            <h4>{widget_2.title}</h4>
            <ul>{content_2}</ul>
          </div>
          <div>
            <h4>{widget_3.title}</h4>
            <ul>{content_3}</ul>
          </div>
          <div>
            <h4>{widget_4.title}</h4>
            <ul>{content_4}</ul>
          </div>
        </div>
      </div>
      <div className={styles.copyrigts}>
        <div className={styles.copyrigts_container}>{copy_text}</div>
      </div>
    </footer>
  );
};
