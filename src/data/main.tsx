import TelegramIcon from '@/public/icons/icon_telegram.svg';
import WhatsappIcon from '@/public/icons/icon_whatsapp.svg';
import VkIcon from '@/public/icons/icon_vk.svg';
import OrionLogo from '@/public/images/orion-logo.webp';
import {
  IconPhone,
  IconPhoneIncoming,
  IconMail,
  IconChevronDown,
  IconExternalLink,
} from '@tabler/icons-react';

export const main: any = {
  logo: {
    src: OrionLogo,
    alt: 'Орион',
  },
  leftText: 'Работаем с 2012 г. Москва и МО.',
  mainMenu: [
    { text: 'О компании', href: '/', target: '_self', icon: '' },
    {
      text: 'Услуги',
      href: '/',
      icon: <IconChevronDown />,
      children: [
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
    },
    {
      text: 'Магазин',
      href: 'https://shop.orionsb.ru/',
      target: '_blank',
      icon: <IconExternalLink />,
    },
    // { text: 'Решения', href: '', icon: '' },
    // { text: 'Расчеты', href: '', icon: '' },
    { text: 'Контакты', href: '', icon: '' },
  ],

  contacts: {
    title: 'Контакты',
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
    adress: `124460, г.Москва, \nул.Консруктора Гуськова, \nд.14, стр.2, офис 2.27`,
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

  footerSlogan: `Мы будем рады видеть Вас в числе наших заказчиков!`,
  copyText: `2012 - 2024 ООО "Орион" © Все права защищены.`,
  privacy: { text: 'Политика конфеденциальности', href: '' },
  company: {
    title: `ООО "Орион"`,
    content: `Мы рады предложить Вам услуги 
              по установке и обслуживанию 
              слаботочных систем и автоматики. 
              Работаем в Москве и МО с 2012 года.`,
  },
  uslugiMenu: {
    title: 'Услуги',
    content: [
      { text: 'Проектирование', href: '', icon: '' },
      { text: 'Монтаж', href: '', icon: '' },
      { text: 'Обслуживание', href: '', icon: '' },
    ],
  },
  systemsMenu: {
    title: 'Системы',
    content: [
      {
        text: 'Пожарные системы',
        href: 'https://orionsb.ru/pozharnye-sistemy/',
        target: '_blank',
        icon: '',
      },
      {
        text: 'Видеонаблюдение',
        href: 'https://orionsb.ru/videonablyudenie/',
        target: '_blank',
        icon: '',
      },
      {
        text: 'Контроль доступа',
        href: 'https://orionsb.ru/kontrol-dostupa/',
        target: '_blank',
        icon: '',
      },
    ],
  },
};
