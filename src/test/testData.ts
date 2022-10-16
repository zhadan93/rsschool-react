export const testCardsData = [
  {
    id: 1,
    name: 'Набор стаканов HK200',
    description: 'Дизайнерский стакан из хрусталя',
    volume: 350,
    material: 'crystal',
    country: 'Germany',
    cost: 7000,
    favorite: true,
  },
  {
    id: 4,
    name: 'Чайная пара HF670',
    description: 'Дизайнерская посуда ручной работы',
    volume: 250,
    material: 'ceramics',
    country: 'China',
    cost: 5000,
    favorite: false,
  },
];

export const InputData = {
  placeholder: 'Search',
  type: 'search',
  value: 'test',
  onValueChange: jest.fn(),
};
