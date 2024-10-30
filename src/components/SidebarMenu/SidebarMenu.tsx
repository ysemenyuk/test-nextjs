'use client';

import cn from 'classnames';
import styles from './sidebaMenu.module.scss';
import { IconHome } from '@tabler/icons-react';
import { NavLink } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const demo = ['>', 'Пожарная сигнализация'];

export const SedebaMenu = ({ menu, className }: any): JSX.Element => {
  const pathname = usePathname();

  return (
    <ul className={cn(styles.menu)}>
      {menu.content.map((item: any) => (
        <li key={item.text}>
          <NavLink
            active={pathname === item.href}
            component={Link}
            href={item.href}
            label={item.text}
          />
        </li>
      ))}
    </ul>
  );
};
