'use client';

import cn from 'classnames';
import Image from 'next/image';
import styles from './heroCompact.module.scss';
import { Button } from '../UI/Button/Button';
import { IconPointFilled } from '@tabler/icons-react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useCountStore } from '@/src/stores/modalStore';
import { useMediaQuery } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';

export const HeroCompact = ({ data, className }: any): JSX.Element => {
  // const matches = useMediaQuery('(min-width: 576px)');
  // const { open } = useCountStore((state) => state);
  const pathname = usePathname();
  const currentData = data[pathname];

  return (
    <>
      <div className={cn(styles.image_section)}>
        <Image
          alt={currentData.altBgImage}
          src={currentData.bgImage}
          placeholder="blur"
          quality={100}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={cn(className, styles.heading_section, styles.bg_color)}>
        <div className={cn(styles.container)}>
          <Breadcrumbs className={styles.breadcrumbs} />

          <div className={cn(styles.heading)}>
            <h1>{currentData.heading}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
