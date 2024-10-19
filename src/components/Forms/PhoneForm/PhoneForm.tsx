'use client';

import cn from 'classnames';
import styles from './phoneForm.module.scss';
import { IconPointFilled } from '@tabler/icons-react';
import {
  Button,
  Group,
  TextInput,
  LoadingOverlay,
  Checkbox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { send } from '@/src/app/actions';
import { useState } from 'react';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const PhoneForm = ({ className }: any): JSX.Element => {
  const [sending, setSending] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
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
    <div className={cn(className, styles.wrapper)}>
      <form className={styles.form} onSubmit={form.onSubmit(sendMessage)}>
        <TextInput
          classNames={{
            input: styles.input,
          }}
          disabled={sending}
          label="Name"
          placeholder="your name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          classNames={{
            input: styles.input,
          }}
          disabled={sending}
          label="Email"
          withAsterisk
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <Checkbox
          label="I agree to sell my privacy"
          key={form.key('termsOfService')}
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Button
          classNames={{
            root: styles.button,
          }}
          type="submit"
          loading={sending}
        >
          Отправить
        </Button>
      </form>
    </div>
  );
};
