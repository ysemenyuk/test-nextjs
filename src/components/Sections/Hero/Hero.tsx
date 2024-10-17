import cn from 'classnames';
import Image from 'next/image';
import styles from './hero.module.scss';
import { Button } from '../../UI/Button/Button';
import { IconPointFilled } from '@tabler/icons-react';

export const Hero = ({ data, className }: any): JSX.Element => {
  const [supText1, supText2, supText3] = data.heading_sup;
  return (
    <section className={cn(className, styles.section)}>
      <Image
        alt={data.altImage}
        src={data.bgImage}
        placeholder="blur"
        quality={100}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          zIndex: '-1',

          // objectPosition: '50% 0',
          // left: '50%',
          // transform: 'translate(-50%)',
        }}
      />

      <div className={cn(styles.container)}>
        <div className={styles.breadcrumbs_container}>
          <ul className={styles.breadcrumbs}>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>

        <div className={cn(styles.heading_container)}>
          <div className={cn(styles.heading)}>
            <div className={cn(styles.sup)}>
              <span>{supText1}</span>
              <IconPointFilled color={'#ff6600'} />
              <span>{supText2}</span>
              <IconPointFilled color={'#ff6600'} />
              <span>{supText3}</span>
            </div>

            <h1>{data.heading_main}</h1>
            <span className={styles.sub}>{data.heading_sub}</span>
          </div>
          <hr />
          <div className={styles.text}>
            <div>{data.text_1}</div>
            <div>{data.text_2}</div>
            <div>{data.text_3}</div>
          </div>
          <div className={styles.btn_container}>
            <Button rounded>{data.btnText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
