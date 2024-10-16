import Date from '@/public/icons/Date.svg';
import Magnifier from '@/public/icons/Magnifier.svg';
import Reload from '@/public/icons/Reload.svg';
import Repair from '@/public/icons/Repair.svg';

import Coin from '@/public/icons/Coin.svg';
import Like from '@/public/icons/Like.svg';
import Rocket from '@/public/icons/Rocket.svg';
import Secure from '@/public/icons/Secure.svg';

import sistemyBezopasnosti from '@/public/images/bg/sistemy-bezopasnosti.webp';

import ohrannyeSistemy1 from '@/public/images/systems/ohrannye-sistemy-1.webp';
import ohrannyeSistemy2 from '@/public/images/systems/ohrannye-sistemy-2.webp';
import ohrannyeSistemy3 from '@/public/images/systems/ohrannye-sistemy-3.webp';
import ohrannyeSistemy4 from '@/public/images/systems/ohrannye-sistemy-4.webp';
import ohrannyeSistemy5 from '@/public/images/systems/ohrannye-sistemy-5.webp';
import ohrannyeSistemy6 from '@/public/images/systems/ohrannye-sistemy-6.webp';

import object1 from '@/public/images/objects/object-1.png';
import object2 from '@/public/images/objects/object-2.png';
import object3 from '@/public/images/objects/object-3.png';
import object4 from '@/public/images/objects/object-4.png';
import object5 from '@/public/images/objects/object-5.png';
import object6 from '@/public/images/objects/object-6.png';

export const hero: any = {
  bgImage: sistemyBezopasnosti,
  altImage: 'Системы безопасности',
  sup: 'Проектирование, Монтаж, Обслуживание',
  heading: 'Системы безопасности',
  sub: 'в Москве и Московской области',
  text_1: 'От профессионалов c 12 летним опытом.',
  text_2: 'Современное оборудование, объекты любой сложности.',
  text_3: 'Бесплатный осмотр объекта и расчет стоимости.',
  btnText: 'Оставить заявку',
};

export const numbers: any = {
  heading: { sup: '', main: '', sub: '' },
  section: { bgColor: '', bgImage: '', altBgImage: '' },
  items: [
    {
      id: 1,
      head_1: '>12',
      head_2: 'лет',
      text_1: 'опыт успешной работы',
      text_2: 'в сфере систем безопасности',
    },
    {
      id: 2,
      head_1: '>500',
      head_2: 'компаний',
      text_1: 'выбрали нас подрядчиком',
      text_2: 'по установке систем безопасности',
    },
    {
      id: 3,
      head_1: '>900',
      head_2: 'систем',
      text_1: 'видеонаблюдения',
      text_2: 'установлено за это время',
    },
    {
      id: 4,
      head_1: '>800',
      head_2: 'систем',
      text_1: 'пожарной сигнализации',
      text_2: 'установлено за это время',
    },
  ],
};

export const uslugi: any = {
  heading: { sup: '', main: 'Весь комплекс услуг', sub: '' },
  section: { bgColor: '', bgImage: '', altBgImage: '' },
  items: [
    {
      id: 1,
      icon: <Magnifier />,
      text_1: 'Обследование объекта',
      text_2: 'Проектные работы',
    },
    {
      id: 2,
      icon: <Repair />,
      text_1: `Монтаж оборудования`,
      text_2: `Пусконаладочные работы`,
    },
    {
      id: 3,
      icon: <Reload />,
      text_1: `Модернизация или ремонт`,
      text_2: `существующей системы`,
    },
    {
      id: 4,
      icon: <Date />,
      text_1: `Регулярное техническое`,
      text_2: `обслуживание`,
    },
  ],
};

export const ohrannyeSistemy: any = {
  heading: { sup: '', main: 'Охранные системы', sub: '' },
  section: { bgColor: '', bgImage: '', altBgImage: '' },
  items: [
    {
      id: 1,
      image: ohrannyeSistemy1,
      text_1: 'Видеонаблюдение',
      text_2: '',
    },
    {
      id: 2,
      image: ohrannyeSistemy2,
      text_1: `Охранная сигнализация`,
      text_2: ``,
    },
    {
      id: 3,
      image: ohrannyeSistemy3,
      text_1: `Контроль доступа`,
      text_2: ``,
    },
    {
      id: 4,
      image: ohrannyeSistemy4,
      text_1: `Домофоны`,
      text_2: ``,
    },
    {
      id: 5,
      image: ohrannyeSistemy5,
      text_1: `Турникеты`,
      text_2: ``,
    },
    {
      id: 6,
      image: ohrannyeSistemy6,
      text_1: `Шлагбаумы`,
      text_2: ``,
    },
  ],
};

export const pozharnyeSistemy: any = {
  heading: { sup: '', main: 'Пожарные системы', sub: '' },
  section: { bgColor: '', bgImage: '', altBgImage: '' },
  items: [
    {
      id: 1,
      image: ohrannyeSistemy1,
      text_1: `Автоматическая`,
      text_2: 'пожарная сигнализация',
    },
    {
      id: 2,
      image: ohrannyeSistemy2,
      text_1: `Система оповещения и управления `,
      text_2: `эвакуацией при пожаре`,
    },
    {
      id: 3,
      image: ohrannyeSistemy3,
      text_1: `Система противодымной вентиляции`,
      text_2: `(дымоудаление и подпор воздуха)`,
    },
    {
      id: 4,
      image: ohrannyeSistemy4,
      text_1: `Модульное пожаротушение`,
      text_2: `(водяное, порошковое, газовое)`,
    },
    {
      id: 5,
      image: ohrannyeSistemy5,
      text_1: `Противопожарный водопровод`,
      text_2: `и насосные станции`,
    },
    {
      id: 6,
      image: ohrannyeSistemy6,
      text_1: `Взаимодействие пожарных систем`,
      text_2: `с инженерным системами здания`,
    },
  ],
};

export const objects: any = {
  heading: { sup: '', main: 'На объектах любой сложности', sub: '' },
  section: { bgColor: '', bgImage: '', altBgImage: '' },
  items: [
    {
      id: 1,
      image: object1,
      text_1: `Бизнес центры и офисы`,
      text_2: '',
    },
    {
      id: 2,
      image: object2,
      text_1: `Супермаркеты и магазины`,
      text_2: ``,
    },
    {
      id: 3,
      image: object3,
      text_1: `Рестораны и кафе`,
      text_2: ``,
    },
    {
      id: 4,
      image: object4,
      text_1: `Производственные помещения`,
      text_2: ``,
    },
    {
      id: 5,
      image: object5,
      text_1: `Складские помещения`,
      text_2: ``,
    },
    {
      id: 6,
      image: object6,
      text_1: `Парковки и гаражи`,
      text_2: ``,
    },
  ],
};

export const whyUs: any = {
  heading: { sup: '', main: 'Почему именно мы', sub: '' },
  section: { bgColor: '', bgImage: '', altBgImage: '' },
  items: [
    {
      id: 1,
      icon: <Magnifier />,
      text_1: `Бесплатный осмотр`,
      text_2:
        'Бесплатный выезд инженера на объект и расчет стоимости работ в течении 24 часов с момента заявки.',
    },
    {
      id: 2,
      icon: <Coin />,
      text_1: `Низкие цены`,
      text_2: `До 20% экономии на оборудовании благодаря прямым закупкам у производителя.`,
    },
    {
      id: 3,
      icon: <Like />,
      text_1: `Успешный опыт`,
      text_2: `Успешный опыт работы свыше 12 лет на объектах разного уровня.`,
    },
    {
      id: 4,
      icon: <Rocket />,
      text_1: `Современные технологии`,
      text_2: `Использование новейшего оборудования и современных технологий.`,
    },
    {
      id: 5,
      icon: <Date />,
      text_1: `Соблюдение сроков`,
      text_2: `Соблюдение сроков выполнения работ зафиксированных в договоре`,
    },
    {
      id: 6,
      icon: <Secure />,
      text_1: `Гарантийное обслуживание`,
      text_2: `Гарантийное и постгарантийное обслуживание на спец. условиях.`,
    },
  ],
};
