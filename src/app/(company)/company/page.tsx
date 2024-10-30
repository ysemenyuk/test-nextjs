'use client';

import cn from 'classnames';
import styles from './page.module.scss';
import * as pageData from '@/src/data/company/page';
import { main } from '@/src/data/main';
import { HeroCompact } from '@/src/components/HeroCompact/HeroCompact';
import { NavLink } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { heroCompact } = pageData;
const { sidebarMenu } = main;

export default function Layout() {
  const pathname = usePathname();

  return <>company page</>;
}
