'use client';

import styles from './phoneForm.module.scss';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { send } from '@/src/app/actions';
import { useState } from 'react';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const PhoneForm = ({ close }: any): JSX.Element => {
  const [sending, setSending] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      phone: '',
    },
    validate: {
      phone: (value) =>
        /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/.test(value)
          ? null
          : 'Неверный формат',
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
    close();
  };

  return (
    <form className={styles.form} onSubmit={form.onSubmit(sendMessage)}>
      <TextInput
        classNames={{ input: styles.input }}
        size="md"
        radius="md"
        disabled={sending}
        label="Имя"
        placeholder="Ваше имя"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        classNames={{ input: styles.input }}
        size="md"
        radius="md"
        disabled={sending}
        label="Телефон"
        withAsterisk
        placeholder="+79291234567"
        key={form.key('phone')}
        {...form.getInputProps('phone')}
      />
      <Button
        classNames={{ root: styles.button }}
        size="md"
        radius="md"
        type="submit"
        loading={sending}
      >
        Отправить
      </Button>
    </form>
  );
};
