import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

export const pageHeading = {
  sup: 'Проектирование, Монтаж, Обслуживание',
  heading: 'ПОЖАРНОЙ СИГНАЛИЗАЦИИ',
  sub: 'в Москве и Московской области',
  description_1: 'От профессионалов с 12 летним опытом.',
  description_2: 'На объектах любого размера и назначения.',
  description_3: 'Бесплатный осмотр и расчет стоимости.',
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
