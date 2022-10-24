import urlMock from './urlMock';

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

urlMock();
export const testFormCardsData = [
  {
    id: 1,
    firstName: 'Ruth',
    lastName: 'Bailey',
    birthday: '2000-10-09',
    sex: 'female',
    country: 'Kazakhstan',
    avatar: URL.createObjectURL(new File(['ruth'], 'ruth.jpg', { type: 'image/jpg' })),
  },
  {
    id: 2,
    firstName: 'Darrell',
    lastName: 'Marshall',
    birthday: '1992-01-01',
    sex: 'male',
    country: 'Armenia',
    avatar: URL.createObjectURL(new File(['darrell'], 'darrell.jpg', { type: 'image/jpg' })),
  },
  {
    id: 3,
    firstName: 'Herbert',
    lastName: 'Jackson',
    birthday: '1995-03-11',
    sex: 'male',
    country: 'Belarus',
    avatar: URL.createObjectURL(new File(['herbert'], 'herbert.jpg', { type: 'image/jpg' })),
  },
];
