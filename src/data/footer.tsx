import { IconExternalLink } from '@tabler/icons-react';

//
// footer
//

export const footer: any = {
  id: 'footer',
  top_text: `Мы будем рады видеть Вас 
             в числе наших заказчиков!`,
  copy_text: `2012 - 2024 ООО "Орион" 
              Все права защищены.`,
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
    content: ['Проектирование', 'Монтаж', 'Обслуживание'],
  },
  systemsMenu: {
    title: 'Системы',
    content: [
      { text: 'Пожарные системы', href: '', icon: <IconExternalLink /> },
      { text: 'Видеонаблюдение', href: '', icon: <IconExternalLink /> },
      { text: 'Контроль доступа', href: '', icon: <IconExternalLink /> },
    ],
  },
  contacts: {
    title: 'Контакты',
    content: [
      `124460, г.Москва, \nул.Консруктора Гуськова, 14с2`,
      '+7 (499) 702-45-65',
      '+7 (929) 645-98-85',
      'info@orionsb.ru',
    ],
  },
};
