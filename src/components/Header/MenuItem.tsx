'use client';

import cn from 'classnames';
import styles from './header.module.scss';
import Link from 'next/link';
import { useHover } from '@mantine/hooks';
import { Transition } from '@mantine/core';
import { useEffect, useState } from 'react';

export const MenuItem = ({ item, className }: any): JSX.Element => {
  const { hovered: hov1, ref: ref1 } = useHover();
  const { hovered: hov2, ref: ref2 } = useHover();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (!hovered && hov1) {
      setHovered(true);
    }
    if (hovered && !hov1 && !hov2) {
      timeoutId = setTimeout(() => setHovered(false), 300);
    }
    return () => clearTimeout(timeoutId);
  }, [hov1, hov2]);

  const Box = ({ item }) => {
    return (
      <div className={cn(styles.submenu)}>
        <h4>{item.text}</h4>
        <ul className={cn(styles.submenu_list)}>
          {item.children.map((i) => (
            <li key={i.text}>{i.text}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <li>
      <div ref={ref1}>
        <Link className={styles.menu_item} href={item.href}>
          {item.text} {item.icon}
        </Link>
        {item.children && (
          <Transition
            mounted={true}
            transition="fade"
            duration={400}
            timingFunction="ease"
          >
            {(transitionStyle) => (
              <div ref={ref2} style={{ ...transitionStyle, zIndex: 111 }}>
                <ul className={cn(styles.megaMenu)}>
                  {item.children.map((item) => (
                    <li key={item.text}>
                      <Box item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Transition>
        )}
      </div>
    </li>
  );
};
