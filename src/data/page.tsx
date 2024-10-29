import Date from '@/public/icons/Date.svg';
import Magnifier from '@/public/icons/Magnifier.svg';
import Reload from '@/public/icons/Reload.svg';
import Repair from '@/public/icons/Repair.svg';
import Coin from '@/public/icons/Coin.svg';
import Like from '@/public/icons/Like.svg';
import Rocket from '@/public/icons/Rocket.svg';
import Secure from '@/public/icons/Secure.svg';
import { IconInfoCircle } from '@tabler/icons-react';

import heroBg from '@/public/images/bg/pozharnaya-signalizaciya.webp';
// import apsImage from '@/public/images/aps.webp';
import soueImage from '@/public/images/soue.webp';
import docsImage from '@/public/images/docs.png';
import apsMobile from '@/public/images/aps-mobile.png';

import ohrannyeSistemy1 from '@/public/images/systems/ohrannye-sistemy-1.webp';
import ohrannyeSistemy2 from '@/public/images/systems/ohrannye-sistemy-2.webp';
import ohrannyeSistemy3 from '@/public/images/systems/ohrannye-sistemy-3.webp';

import pozharnyeSistemy1 from '@/public/images/systems/pozharnye-sistemy-2.webp';
import pozharnyeSistemy2 from '@/public/images/systems/pozharnye-sistemy-3.webp';
import pozharnyeSistemy3 from '@/public/images/systems/pozharnye-sistemy-5.webp';

import object1 from '@/public/images/objects/object-1.webp';
import object2 from '@/public/images/objects/object-2.webp';
import object3 from '@/public/images/objects/object-3.webp';
import object4 from '@/public/images/objects/object-4.webp';
import object5 from '@/public/images/objects/object-5.webp';
import object6 from '@/public/images/objects/object-6.webp';

import num1 from '@/public/images/numbers/num-1.png';
import num2 from '@/public/images/numbers/num-2.png';
import num3 from '@/public/images/numbers/num-3.png';
import num4 from '@/public/images/numbers/num-4.png';
import num5 from '@/public/images/numbers/num-5.png';
import num6 from '@/public/images/numbers/num-6.png';

import brand1 from '@/public/images/brands/brand-1.png';
import brand2 from '@/public/images/brands/brand-2.png';
import brand3 from '@/public/images/brands/brand-3.png';
import brand4 from '@/public/images/brands/brand-4.png';
import brand5 from '@/public/images/brands/brand-5.png';
import brand6 from '@/public/images/brands/brand-6.png';
import brand7 from '@/public/images/brands/brand-7.png';
import brand8 from '@/public/images/brands/brand-8.png';

import dop1 from '@/public/images/dop-1.png';
import dop2 from '@/public/images/dop-2.png';
import dop3 from '@/public/images/dop-3.png';
import dop4 from '@/public/images/dop-4.png';

import aps1 from '@/public/images/aps-1-Photoroom.png';
import aps2 from '@/public/images/aps-2-Photoroom.png';
import aps3 from '@/public/images/aps-3-Photoroom.png';
import aps4 from '@/public/images/aps-4-Photoroom.png';
import aps5 from '@/public/images/aps-5-Photoroom.png';
import aps6 from '@/public/images/aps-6-Photoroom.png';

//
// hero
//

export const hero: any = {
  id: 'hero',
  bgImage: heroBg,
  altBgImage: 'Пожарная сигнализация',
  heading_sup: ['Проектирование', 'Монтаж', 'Обслуживание'],
  heading_sup_mobile: 'Монтаж и Обслуживание',
  heading_main: 'Пожарная сигнализация',
  heading_sub: 'в Москве и Московской области',
  text: [
    'От профессионалов c 12 летним опытом.',
    'На объектах любого размера и назначения.',
    'Бесплатный выезд и расчет стоимости.',
  ],
  btnText: 'Оставить заявку',
};

//
// actionDark
//

export const actionDark: any = {
  id: 'actionDark',
  content: {
    title_1: 'Оставьте заявку',
    title_2: 'На бесплатный выезд инженера',
    text: true,
    text_1: 'Изучит особенности объекта',
    text_2: 'Подберет оптимальное решение',
    text_3: 'Ответит на все вопросы',
    btnText: 'Отправить заявку',
  },
};

//
// actionLight
//

export const actionLight: any = {
  id: 'actionLigt',
  content: {
    title: 'Нужна консультация? \nМы перезвоним!',
    text: 'Подробно ответим на любые вопросы о наших услугах и условиях работы.',
    btnText: 'Отправить заявку',
  },
};

//
// numbers
//

export const numbers: any = {
  id: 'numbers',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  content: [
    {
      id: 1,
      head_1: '>12',
      head_2: 'лет',
      text_1: 'опыт успешной работы \nв сфере систем безопасности',
      text_2: '',
    },
    {
      id: 2,
      head_1: '>500',
      head_2: 'компаний',
      text_1: 'выбрали нас подрядчиком \nпо установке систем безопасности',
      text_2: '',
    },
    {
      id: 3,
      head_1: '>900',
      head_2: 'систем',
      text_1: 'видеонаблюдения \nустановлено за это время',
      text_2: '',
    },
    {
      id: 4,
      head_1: '>800',
      head_2: 'систем',
      text_1: 'пожарной сигнализации \nустановлено за это время',
      text_2: '',
    },
  ],
};

//
// alert
//

export const alert: any = {
  id: 'alert',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  content: {
    variant: '',
    color: '',
    title: 'Это важно!',
    icon: <IconInfoCircle />,
    text: [
      `Согласно нормам РФ пожарная сигнализация должна быть установлена в каждом коммерческом помещении. Также должны проводится регулярные обслуживание и испытания системы с составлением соответсвующих актов.`,
      `Работы по проектированию, монтажу и техническому обслуживанию пожарной сигнализации должны проводится компанией имеющей дествующую лицензию МЧС.`,
      `За не исполение данных тербований предусмотрены штрафы как для юридических лиц так и для физических лиц,  ответственных за пожарною безопасность конкретного объекта.`,
    ],
  },
};

//
// uslugi
//

export const uslugi: any = {
  id: 'uslugi',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: { sup: '', main: 'Мы предлагаем следующие услуги', sub: '' },
  content: [
    {
      id: 1,
      icon: <Magnifier />,
      text_1: `Обследование объекта \nПроектные работы`,
      text_2: '',
    },
    {
      id: 2,
      icon: <Repair />,
      text_1: `Монтаж оборудования \nПусконаладочные работы`,
      text_2: ``,
    },
    {
      id: 3,
      icon: <Reload />,
      text_1: `Модернизация или ремонт \nсуществующей системы`,
      text_2: ``,
    },
    {
      id: 4,
      icon: <Date />,
      text_1: `Регулярное техническое \nобслуживание`,
      text_2: ``,
    },
  ],
};

//
// apsTypes
//

export const apsTypes: any = {
  id: 'apsTypes',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Типы исполнения АПС',
    sub: 'Работаем со всеми видами и производителями оборудования',
  },
  content: [
    {
      image: aps1,
      alt: 'Безадресные системы',
      title: 'Пороговые системы',
      text: [
        `Их еще часто называют традиционными.`,
        `Принцип работы данного типа основан на изменение сопротивления в шлейфе пожарной сигнализации. Датчики могут находиться в двух состояниях «норма» и «пожар».`,
        `В случае фиксации фактора пожара приёмно-контрольный прибор выдает сигнал тревоги по тому шлейфу, в котором установлен этот датчик. Не всегда можно быстро определить место сработки, т.к. в пороговых системах на одном шлейфе устанавливают 10-20 пожарных извещателей.`,
      ],
    },
    {
      image: aps4,
      alt: 'Адресные системы',
      title: 'Адресные системы',
      text: [
        `Более совершенная система контролирует состояние параметров установленных устройств, что позволяет существенно снизить вероятность ложных тревог.`,
        `Каждому извещателю присвоен свой уникальный адрес, что позволяет приёмно-контрольному прибору отличать их и понимать конкретную причину и место неисправности.`,
        `Решение о переходе в режим «пожар» или любое другое состояние, принимает именно контрольная панель, а не извещатель.`,
      ],
    },
    {
      image: aps6,
      alt: 'Радиоканальные системы',
      title: 'Радиоканальные системы',
      text: [
        `Также являются адресными, что позволяет достаточно точно определить место "пожара" или "неисправности". Не требует прокладки проводов, a следовательно, проще в установке.`,
        `Главный минус такой системы — высокая стоимость оборудования и расходы в процессе эксплуатации из-за периодической замены элементов питания.`,
        `Одним из плюсов является безопасность при минимальном влиянии на интерьер и дизайн помещения.`,
      ],
    },
  ],
};

//
// aps
//

export const aps: any = {
  id: 'aps',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  // heading: { sup: '', main: 'Пожарная сигнализация (АПС)', sub: '' },
  content: {
    image: aps5,
    imageMobile: apsMobile,
    alt: 'Автоматическая пожарная сигнализация (АПС)',
    title: 'Автоматическая пожарная сигнализация (АПС)',
    text: [
      'Это комплекс технических средств, предназначение которого обнаружить возгорание, оповестить дежурный персонал и передать сигналы управления другим пожарным системам (оповещения, дымоудаления) и инженерным системам объекта (вентиляция, отопление, электроснабжение).',
      `Виды систем пожарной сигнализации различаются по способу подключения и принципу работы. Согласно основной классификации, представлены проводные безадресные, проводные адресные и беспроводные (радиоканальные) адресные системы.`,
      `Все они как правило состоят из приемно-контрольного прибора (ППК) и подключенных к нему пожарных извещетелей различных типов (дымовые извещатели, тепловые извещатели, извещатели пламени).`,
    ],
  },
};

//
// soue
//

export const soue: any = {
  id: 'soue',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  // heading: { sup: '', main: 'Система оповещения (СОУЭ)', sub: '' },
  content: {
    image: soueImage,
    alt: 'Система оповещения (СОУЭ)',
    title: 'Система оповещения (СОУЭ)',
    text: [
      `Почти всегда является неотемлемой частью пожарной сигнализации. Её задача состоит в оповещении сотрудников и посетителей объекта о выявлении пожара системой пожарной сигнализации.`,
      `Системы оповещения согласно нормам делятся на пять типов. Выбор типа устанавливаемой системы зависит от назначения объекта защиты и действующих норм пожарной безопасности.`,
      `Системы оповещения как правило состоят из световых (табло “ВЫХОД”) и звуковых (сирены) или речевых (динамики) оповещателей, которые подключаются к прибору приемно-контрольному и модулям управления оповещением.`,
    ],
  },
};

//
// pozharnyeSistemy
//

export const pozharnyeSistemy: any = {
  id: 'pozharnyeSistemy',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Другие пожарные системы',
    sub: 'Устанавливаются на объектах согласно действующих норм и правил.',
  },
  content: [
    {
      id: 1,
      image: pozharnyeSistemy1,
      text_1: `Система оповещения \nи управления эвакуацией`,
      text_2: ``,
    },
    {
      id: 2,
      image: pozharnyeSistemy3,
      text_1: `Модульное пожаротушение \n(порошковое, газовое)`,
      text_2: ``,
    },
    {
      id: 3,
      image: pozharnyeSistemy2,
      text_1: `Автоматика противодымной \nвентиляции.`,
      text_2: ``,
    },
  ],
};

//
// ohrannyeSistemy
//

export const ohrannyeSistemy: any = {
  id: 'ohrannyeSistemy',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Охранные системы',
    sub: 'Проектирование, установка, обслуживание',
  },
  content: [
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
  ],
};

//
// objects
//

export const objects: any = {
  id: 'objects',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: { sup: '', main: 'На объектах любой сложности', sub: '' },
  content: [
    {
      id: 1,
      image: object1,
      text_1: `Бизнес центры и офисы`,
    },
    {
      id: 2,
      image: object2,
      text_1: `Супермаркеты и магазины`,
    },
    {
      id: 3,
      image: object3,
      text_1: `Рестораны и кафе`,
    },
    {
      id: 4,
      image: object4,
      text_1: `Производственные помещения`,
    },
    {
      id: 5,
      image: object5,
      text_1: `Складские помещения`,
    },
    {
      id: 6,
      image: object6,
      text_1: `Парковки и гаражи`,
    },
  ],
};

//
// brands
//

export const brands: any = {
  id: 'brands',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Используем надежное оборудование',
    sub: 'только проверенные производители, с сертификатами пожарной безопасности',
  },
  content: [
    {
      id: 1,
      image: brand1,
      text_1: ``,
    },
    {
      id: 2,
      image: brand2,
      text_1: ``,
    },
    {
      id: 3,
      image: brand3,
      text_1: ``,
    },
    {
      id: 4,
      image: brand4,
      text_1: ``,
    },
    {
      id: 5,
      image: brand5,
      text_1: ``,
    },
    {
      id: 6,
      image: brand6,
      text_1: ``,
    },
    {
      id: 7,
      image: brand7,
      text_1: ``,
    },
    {
      id: 8,
      image: brand8,
      text_1: ``,
    },
  ],
};

//
// whyUs
//

export const whyUs: any = {
  id: 'whyUs',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Почему именно мы',
    sub: 'Несколько плюсов в пользу нашей компании',
  },
  content: [
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

//
// docs
//

export const docs: any = {
  id: 'docs',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Есть все необходимые лицензии и допуски',
    sub: 'для проектирования, установки, ремонта и обслуживания пожарных систем',
  },
  content: {
    image: docsImage,
    altImage: 'Лицензии и сертификаты',
    list: [
      {
        id: 1,
        icon: '',
        text: `Действующая лицензия МЧС.`,
      },
      {
        id: 2,
        icon: '',
        text: `Действующая выписка из реестра СРО.`,
      },
      {
        id: 3,
        icon: '',
        text: `Выписка из реестра МЧС проектировщиков.`,
      },
      {
        id: 4,
        icon: '',
        text: `Сертификаты повышения квалификации в области монтажа 
                и обслуживания систем пожарной безопасности.`,
      },
      {
        id: 5,
        icon: '',
        text: `Сертификаты обучения по установке и настройке 
                оборудования разных производителей (Болид, Рубеж, Стрелец).`,
      },
    ],
  },
};

//
// youGet
//

export const youGet: any = {
  id: 'youGet',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Что в итоге вы получаете',
    sub: 'Заключив договор с нашей компанией',
  },
  content: [
    {
      id: 1,
      image: num1,
      text_1: `Услугу под ключ`,
      text_2:
        'Проектирование, поставку оборудования, монтажные работы и полный комплект документов от одной компании.',
    },
    {
      id: 2,
      image: num2,
      text_1: `Рабочую систему`,
      text_2: `Полностью работоспособную систему, смонтированную согласно действующим нормам и правилам пожарной безопасности.`,
    },
    {
      id: 3,
      image: num3,
      text_1: `Комплект документов`,
      text_2: `Необходимый для эксплуатации системы, и успешного прохождения проверок МЧС.`,
    },
    {
      id: 4,
      image: num4,
      text_1: `Экономию бюджета`,
      text_2: `Мы предложим Вам наиболее оптимальный вариант оборудования и работ исходя из особенностей вашего объекта.`,
    },
    {
      id: 5,
      image: num5,
      text_1: `Качественный монтаж`,
      text_2: `Наши монтажники не задевают интерьер и коммуникации, и не оставляют после себя мусор.`,
    },
    {
      id: 6,
      image: num6,
      text_1: `Бесплатное обучение`,
      text_2: `Наши специалисты проведут обучение вашего персонала по эксплуатации установленной системы.`,
    },
  ],
};

//
// whatElse
//

export const whatElse: any = {
  id: 'whatElse',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: {
    sup: '',
    main: 'Что можем предложить еще',
    sub: 'Комплес услуг в обласи пожарной безопасности',
  },
  content: [
    {
      id: 1,
      image: dop1,
      text_1: `Рассчитать и поставить на объект необходимое количество противопожарного оборудования (огнетушители, пожарные щиты и т.д.)`,
    },
    {
      id: 3,
      image: dop3,
      text_1: `Выполнить проверку и испытание пожарных кранов (ПК), выполнить перекатку пожарных рукавов.`,
    },
    {
      id: 2,
      image: dop2,
      text_1: `Провести испытания пожарных лестниц и ограждений.`,
    },

    {
      id: 4,
      image: dop4,
      text_1: `Разработать и изготовить планы эвакуации. Поставить знаки пожарной безопасности.`,
    },
  ],
};

//
// faq
//

export const faq: any = {
  id: 'faq',
  wrapper: { bgColor: '', bgImage: '', altBgImage: '' },
  heading: { sup: '', main: 'Ответы на важные вопросы (FAQ)', sub: '' },
  content: [
    {
      value: 'Зачем нужна установка пожарной сигнализации?',
      description: [
        `Согласно Федеральному закону Российской Федерации №123-ФЗ от 22.07.2008 к зданиям и сооружениям предъявляются требования по обеспечению пожарной безопасности. Качественная разработка проекта и установка системы сигнализации обеспечит безопасность прежде всего людям, а также и имуществу, находящимся на объекте.`,
        `Собственники зданий либо лица, управляющие зданиями или занимающиеся строительством, обязаны обеспечить наличие систем безопасности при пожаре, в число которых входят системы пожарной сигнализации.`,
        `Монтаж сигнализации должен быть осуществлен компанией, имеющей лицензию на осуществление подобного рода деятельности.`,
      ],
    },
    {
      value: 'Где нужна система пожарной сигнализации?',
      description: [
        `Системы пожарной сигнализации необходимы для всех нежилых и коммерческих объектов. К ним относятся офисы, магазины, склады, производственные помещения, выставочные залы, учебные заведения.`,
      ],
    },
    {
      value: 'Кто имеет право устанавливать пожарную сигнализацию?',
      description: [
        `Установка (монтаж), обслуживание и ремонт устройств по обеспечению пожарной безопасности согласно пункту 15 ч.1 ст. 12 №99-ФЗ от 4 мая 2011 года "О лицензировании отдельных видов деятельности" и другим законодательным актам подлежит лицензированию.
        Выполнять данные работы (установку, ремонт и обслуживание средств обеспечения пожарной безопасности) имеют право организации, имеющие лицензию МЧС России, а также допуски СРО.`,
      ],
    },
    {
      value: 'Кто отвечает за систему пожарной сигнализации на предприятии?',
      description: [
        `Руководитель организации несет ответственность за наличие, исправность и соответствие законам и нормам системы пожарной сигнализации (основа - "Правила противопожарного режима в Российской Федерации").
        Согласно Федеральному закону № 69 "О пожарной безопасности", инспекция по пожарной безопасности имеет право привлекать к ответственности за нарушения:`,
        `- Владелец объекта;`,
        `- Лица, уполномоченные владеть, пользоваться и распоряжаться имуществом на объекте (включая арендаторов);`,
        `- Должностные лица в пределах своей компетенции.`,
      ],
    },
    {
      value:
        'Кто обязан устанавливать и обслуживать систему пожарной сигнализации в арендуемых помещениях?',
      description: [
        `Условия зависят от договора аренды. За систему пожарной сигнализации может отвечать как арендатор, так и арендодатель.
        Как правило, арендодатель сдает здание с системой пожарной сигнализации, а арендатор оплачивает ежемесячное обслуживание. Если система сигнализации не установлена, обязанность по ее установке и обслуживанию указывается в договоре.`,
        `Важно. Пожарный инспектор имеет право привлечь к ответственности как арендатора, так и арендодателя за нарушение правил пожарной безопасности.`,
      ],
    },
  ],
};
