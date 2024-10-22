import TelegramIcon from '@/public/icons/icon_telegram.svg';
import WhatsappIcon from '@/public/icons/icon_whatsapp.svg';
import VkIcon from '@/public/icons/icon_vk.svg';
import LinkIcon from '@/public/icons/icon_external_link.svg';
import ArrowDownIcon from '@/public/icons/icon_arrow_down.svg';
import OrionLogo from '@/public/images/orion-logo.webp';
import { IconPhone, IconPhoneIncoming, IconMail } from '@tabler/icons-react';

//
// header
//

export const header: any = {
  id: 'header',
  logo: {
    src: OrionLogo,
    alt: 'Орион',
  },
  leftText: 'Работаем с 2012 г. Москва и МО.',
  menu: [
    { text: 'Услуги', href: '', icon: '' },
    { text: 'Системы', href: '', icon: '' },
    { text: 'Объекты', href: '', icon: '' },
    { text: 'Оборудование', href: '', icon: '' },
    { text: 'Контакты', href: '', icon: '' },
  ],
  contacts: {
    callBack: {
      type: 'button',
      text: 'Перезвонить',
      icon: <IconPhoneIncoming />,
    },
    phone: {
      type: 'link',
      text: `+7\u00a0(499)\u00a0702-45-65`,
      href: 'tel:+7(499)702-45-65',
      icon: <IconPhone />,
    },
    mail: {
      type: 'link',
      text: 'info@orionsb.ru',
      href: 'mailto:info@orionsb.ru',
      icon: <IconMail />,
    },
  },
  messengers: [
    {
      name: 'Whatsapp',
      href: 'whatsapp://send?phone=79296459885',
      icon: <WhatsappIcon />,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/YouraGPT',
      icon: <TelegramIcon />,
    },
    {
      name: 'vk',
      href: 'https://vk.me/orionsbru',
      icon: <VkIcon />,
    },
  ],
};
