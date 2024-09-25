import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

export const pageTitle = {
  h1Top: 'проектирование, монтаж, обслуживание',
  h1Title: 'СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ',
  h1Buttom: 'в Москве и Московской области',
  descLine1: 'Бесплатный осмотр объекта и расчет стоимости.',
  descLine2: 'Современное оборудование, объекты любой сложности.',
};

export const uslugi: { icon: JSX.Element; text: string }[] = [
  {
    icon: <HiOutlinePhone />,
    text: 'Обследование объекта Проектные работы',
  },
  {
    icon: <HiOutlinePhone />,
    text: `Монтаж оборудования Пусконаладочные работы`,
  },
  {
    icon: <HiOutlinePhone />,
    text: `Модернизация или ремонт существующей системы`,
  },
  {
    icon: <HiOutlinePhone />,
    text: `Регулярное техническое обслуживание`,
  },
];
