'use client';

import cn from 'classnames';
import styles from './menuItem.module.scss';
import Link from 'next/link';
import { useHover } from '@mantine/hooks';
import { Transition } from '@mantine/core';
import { Key, useEffect, useState } from 'react';

export const MenuItem = ({ item, className }: any): JSX.Element => {
  return (
    <li>
      <Link className={styles.menu_item} href={item.href}>
        {item.text} {item.icon}
      </Link>
    </li>
  );
};

export const MenuItemWithSubmenu = ({ item, className }: any): JSX.Element => {
  const { hovered: hoverMenuItem, ref: refMenuItem } = useHover();
  const { hovered: hoverMegamenu, ref: refMegamenu } = useHover();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    if (!hovered && hoverMenuItem) {
      setHovered(true);
    }
    if (hovered && !hoverMenuItem && !hoverMegamenu) {
      timeoutId = setTimeout(() => setHovered(false), 300);
    }
    return () => clearTimeout(timeoutId);
  }, [hoverMenuItem, hoverMegamenu]);

  const Submenu = ({ submenu }: any): JSX.Element => {
    return (
      <div className={cn(styles.submenu)}>
        <h4 className={styles.submenu_item}>
          <Link href={submenu.href} target={submenu.target}>
            {submenu.text} {submenu.icon}
          </Link>
        </h4>
        <ul className={cn(styles.submenu_list)}>
          {submenu.children.map((item: any) => (
            <li key={item.text} className={styles.submenu_item}>
              <Link href={item.href} target={item.target}>
                {item.text} {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <li>
      <div ref={refMenuItem}>
        <Link
          className={styles.menu_item}
          href={item.href}
          target={item.target}
        >
          {item.text} {item.icon}
        </Link>
      </div>
      <Transition
        mounted={hovered}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <div ref={refMegamenu} style={{ ...transitionStyle, zIndex: 111 }}>
            <ul className={cn(styles.megaMenu)}>
              {item.children.map((submenu: any) => (
                <li key={item.text}>
                  <Submenu submenu={submenu} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </li>
  );
};
