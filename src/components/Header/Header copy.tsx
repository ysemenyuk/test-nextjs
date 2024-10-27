'use client';

import { useMediaQuery } from '@mantine/hooks';

export const Header = ({ className }: any): JSX.Element => {
  const matches1 = useMediaQuery('(max-width: 576px)');
  const matches2 = useMediaQuery('(min-width: 576px)');

  if (!matches1 || !matches2) <></>;

  return <></>;
};
