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
    { text: 'О компании', href: '/', icon: '' },
    { text: 'Услуги', href: '/', icon: <ArrowDownIcon /> },
    { text: 'Магазин', href: 'https://shop.orionsb.ru/', icon: <LinkIcon /> },
    // { text: 'Решения', href: '', icon: '' },
    // { text: 'Расчеты', href: '', icon: '' },
    { text: 'Контакты', href: '', icon: '' },
  ],
  menuUslugi: [
    {
      text: 'Охранные системы',
      href: '/',
      icon: '',
      children: [
        { text: 'Видеонаблюдение', href: '/', icon: '' },
        { text: 'Контроль доступа', href: '/', icon: '' },
        { text: 'Охранная сигнализация', href: '/', icon: '' },
      ],
    },
    {
      text: 'Пожарные системы',
      href: '/',
      icon: '',
      children: [
        { text: 'Пожарная сигнализация', href: '/', icon: '' },
        { text: 'Системы оповещения', href: '/', icon: '' },
        { text: 'Системы пожаротушения', href: '/', icon: '' },
      ],
    },
    {
      text: 'Пожарная безопасность',
      href: '',
      icon: '',
      children: [
        { text: 'Планы эвакуации', href: '/', icon: '' },
        { text: 'Проверка пожарных кранов', href: '/', icon: '' },
        { text: 'Перекатка пожарных рукавов', href: '/', icon: '' },
        { text: 'Перезарядка огнетушителей', href: '/', icon: '' },
        { text: 'Испытание пожарных лестниц', href: '/', icon: '' },
        { text: 'Продажа огнетушителей', href: '/', icon: '' },
      ],
    },
  ],
  contacts: {
    callBack: {
      text: 'Перезвонить',
      icon: <IconPhoneIncoming />,
    },
    phone1: {
      text: `+7\u00a0(499)\u00a0702-45-65`,
      href: 'tel:+7(499)702-45-65',
      icon: <IconPhone />,
    },
    phone2: {
      text: `+7\u00a0(929)\u00a0645-98-85`,
      href: 'tel:+7(929)645-98-85',
      icon: <IconPhone />,
    },
    mail: {
      text: 'info@orionsb.ru',
      href: 'mailto:info@orionsb.ru',
      icon: <IconMail />,
    },
    adress: `124460, г.Москва, \nул.Консруктора Гуськова, 14с2`,
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
