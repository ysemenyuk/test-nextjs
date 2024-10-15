import Date from '@/public/icons/Date.svg';
import Magnifier from '@/public/icons/Magnifier.svg';
import Reload from '@/public/icons/Reload.svg';
import Repair from '@/public/icons/Repair.svg';
import bgHome from '@/public/images/home-bg.webp';

export const hero: any = {
  bgImage: bgHome,
  altImage: 'Системы безопасности',
  sup: 'Проектирование, Монтаж, Обслуживание',
  heading: 'СИСТЕМЫ БЕЗОПАСНОСТИ',
  sub: 'в Москве и Московской области',
  text_1: 'От профессионалов c 12 летним опытом.',
  text_2: 'Современное оборудование, объекты любой сложности.',
  text_3: 'Бесплатный осмотр объекта и расчет стоимости.',
  btnText: 'Оставить заявку',
};

export const uslugi: any = {
  heading: { sup: '', main: 'МЫ ПРЕДЛАГАЕМ РЕШЕНИЕ ПОД КЛЮЧ', sub: '' },
  items: [
    {
      icon: <Magnifier />,
      text_1: 'Обследование объекта',
      text_2: 'Проектные работы',
    },
    {
      icon: <Repair />,
      text_1: `Монтаж оборудования`,
      text_2: `Пусконаладочные работы`,
    },
    {
      icon: <Reload />,
      text_1: `Модернизация или ремонт`,
      text_2: `существующей системы`,
    },
    {
      icon: <Date />,
      text_1: `Регулярное техническое`,
      text_2: `обслуживание`,
    },
  ],
};
