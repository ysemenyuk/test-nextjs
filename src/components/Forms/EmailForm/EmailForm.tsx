'use client';

import cn from 'classnames';
import styles from './emailForm.module.scss';
import { IconPointFilled } from '@tabler/icons-react';
import { Button, Group, TextInput, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { send } from '@/src/app/actions';
import { useState } from 'react';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const EmailForm = ({ className }: any): JSX.Element => {
  const [sending, setSending] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  const sendMessage = async (values: any) => {
    console.log(1, values);
    setSending(true);
    await sleep(3000);
    await send(values);
    setSending(false);
    console.log(2);
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={form.onSubmit(sendMessage)}>
      <TextInput
        classNames={{
          input: styles.input,
        }}
        disabled={sending}
        radius="md"
        size="md"
        withAsterisk
        placeholder="your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        classNames={{
          input: styles.input,
        }}
        disabled={sending}
        radius="md"
        size="md"
        withAsterisk
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Button
        classNames={{
          root: styles.button,
        }}
        radius="md"
        size="md"
        type="submit"
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        loading={sending}
      >
        Отправить
      </Button>
    </form>
  );
};
