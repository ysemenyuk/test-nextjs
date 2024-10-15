import cn from 'classnames';
import styles from './uslugi.module.scss';
import { Heading } from '../../UI/Heading/Heading';

export const Uslugi = ({ data, className }: any): JSX.Element => {
  return (
    <section className={cn(className, styles.section)}>
      <div className={cn(styles.heading_container)}>
        <Heading data={data.heading} />
      </div>
      <div className={cn(styles.items_container)}>
        {data.items.map((item: any) => (
          <div className={cn(styles.item)}>
            <div className={cn(styles.icon_wrapper)}>{item.icon}</div>
            <div className={cn(styles.text_wrapper)}>
              <div>{item.text_1}</div>
              <div>{item.text_2}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
