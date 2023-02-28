export const cities = ['київ', 'одеса', 'харків'];

export const sections = {
  'Всі новини': [],
  'COVID-19': [],
  Війна: [],
  Політика: ['Україна', 'Світ'],
  'Здоров’я': ['Дієти', 'Краса', 'Секс', 'Психологія', 'Медицина'],
  Події: ['ДТП', 'Катастрофи', 'Кримінал'],
  Лайфстайл: [
    'Історії з життя',
    'Подорожі',
    'Кухня',
    'Шоубізнес',
    'Мода та стиль',
    'Зірковий гороскоп'
  ],
  Суспільство: ['Охорона здоров’я', 'Безпека', 'Екологія', 'Релігія'],
  Регіони: ['Київ', 'Одеса', 'Харків', 'Львів'],
  Техно: ['Наука', 'Гаджети', 'ІТ', 'Космос'],
  Економіка: ['Фінанси', 'Комунальні послуги', 'Бізнес', 'Львів'],
  Спорт: []
};

export type Sections = typeof sections;

export const about = [
  'Про нас',
  'Контакти',
  'Структура власності',
  'Команда',
  'Медіакіт'
];