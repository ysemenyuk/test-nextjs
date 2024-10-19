import cn from 'classnames';
import styles from './Soue.module.scss';
import Image from 'next/image';

export const Soue = ({ data, className }: any): JSX.Element => {
  const text = data.text.map((text: string, id: number) => (
    <p key={id}>{text}</p>
  ));

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.text)}>{text}</div>
      <div className={cn(styles.image)}>
        <Image alt={data.alt} src={data.image} />
      </div>
    </div>
  );
};
