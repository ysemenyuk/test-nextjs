'use client';

import cn from 'classnames';
import Image from 'next/image';
import styles from './hero.module.scss';
import { Button } from '../UI/Button/Button';
import { IconPointFilled } from '@tabler/icons-react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useCountStore } from '@/src/stores/modalStore';
import { useMediaQuery } from '@mantine/hooks';

export const Hero = ({ data, className }: any): JSX.Element => {
  const [supText1, supText2, supText3] = data.heading_sup;
  const text = data.text.map((text: string) => <p key={text}>{text}</p>);
  const matches = useMediaQuery('(min-width: 576px)');
  const { open } = useCountStore((state) => state);

  return (
    <section className={cn(className, styles.section, styles.bg_color)}>
      {matches && (
        <Image
          alt={data.altBgImage}
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
      )}

      <div className={cn(styles.container)}>
        {matches && <Breadcrumbs />}

        <div className={cn(styles.heading_container)}>
          <div className={cn(styles.heading)}>
            {matches ? (
              <div className={cn(styles.sup)}>
                <span>{supText1}</span>
                <IconPointFilled color={'#ff6600'} />
                <span>{supText2}</span>
                <IconPointFilled color={'#ff6600'} />
                <span>{supText3}</span>
              </div>
            ) : (
              <div className={cn(styles.sup)}></div>
            )}

            <h1>{data.heading_main}</h1>
            <span className={styles.sub}>{data.heading_sub}</span>
          </div>
          <hr />
          <div className={styles.text}>{text}</div>
          <div className={styles.btn_container}>
            <Button rounded onClick={open}>
              {data.btnText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
