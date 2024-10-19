import cn from 'classnames';
import styles from './alert.module.scss';

export const MyAlert = ({ data, className }: any): JSX.Element => {
  const text = data.text.map((text: string) => <p key={text}>{text}</p>);

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.icon}>{data.icon}</div>
      <div className={styles.text}>
        <div className={styles.title}>{data.title}</div>
        {text}
      </div>
    </div>
  );
};
