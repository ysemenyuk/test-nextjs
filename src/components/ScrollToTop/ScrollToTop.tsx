'use client';

import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, ActionIcon, Text, Transition } from '@mantine/core';

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              variant="gradient"
              size="xl"
              radius="xl"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}
