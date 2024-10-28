import cn from 'classnames';
import styles from './footer.module.scss';
import { footer } from '@/src/data/footer';
import Link from 'next/link';

const { top_text, copy_text, privacy, company, uslugi, systems, contacts } =
  footer;

export const Footer = ({ className }: any): JSX.Element => {
  const uslugiContent = uslugi.content.map((item: string) => (
    <li key={item}>{item}</li>
  ));

  const systemsContent = systems.content.map((item: any) => (
    <li key={item.text}>
      <Link href={item.href} className={styles.link}>
        {item.text} {item.icon}
      </Link>
    </li>
  ));

  const contactsContent = contacts.content.map((item: string) => (
    <li key={item}>{item}</li>
  ));

  return (
    <footer className={cn(className, styles.footer)}>
      <div className={styles.action}>{top_text}</div>
      <div className={styles.widgets}>
        <div className={styles.widgets_container}>
          <div>
            <h4>{uslugi.title}</h4>
            <ul>{uslugiContent}</ul>
          </div>
          <div>
            <h4>{systems.title}</h4>
            <ul>{systemsContent}</ul>
          </div>
          <div>
            <h4>{contacts.title}</h4>
            <ul>{contactsContent}</ul>
          </div>
          <div>
            <h4>{company.title}</h4>
            <p>{company.content}</p>
          </div>
        </div>
      </div>
      <div className={styles.copyrigts}>
        <div className={styles.copyrigts_container}>
          <span>{copy_text}</span>
          <Link href={privacy.href}>{privacy.text}</Link>
        </div>
      </div>
    </footer>
  );
};
