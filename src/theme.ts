'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

const orion: MantineColorsTuple = [
  '#fff1e2',
  '#ffe2cc',
  '#ffc39b',
  '#ffa264',
  '#fe8637',
  '#fe741a',
  '#ff6c09',
  '#e45a00',
  '#cb4f00',
  '#b14100',
];

export const theme = createTheme({
  primaryColor: 'orion',
  colors: {
    orion,
  },
});
