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

export const inputData = {
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

export const testPicturesSearchCardsData = [
  {
    id: 'EP_OHkgn1JI',
    created_at: '2017-05-29T15:16:16Z',
    width: 7598,
    height: 5933,
    likes: 150,
    description: null,
    tags: [{ title: 'animal' }],
    imgUrl: URL.createObjectURL(new File(['ruth'], 'ruth.jpg', { type: 'image/jpg' })),
    userName: 'Jack Hamilton',
  },
  {
    id: 'mJaD10XeD7w',
    created_at: '2017-05-21T09:47:07Z',
    width: 3374,
    height: 4498,
    likes: 686,
    description: 'Larry',
    tags: [{ title: 'cat' }, { title: 'animal' }],
    imgUrl: URL.createObjectURL(new File(['ruth'], 'ruth.jpg', { type: 'image/jpg' })),
    userName: 'Alexander London',
  },
  {
    id: 'jKoRZkv2o0U',
    created_at: '2019-06-18T21:06:08Z',
    width: 3024,
    height: 3778,
    likes: 2003,
    description: null,
    tags: [{ title: 'fashion' }],
    imgUrl: URL.createObjectURL(new File(['ruth'], 'ruth.jpg', { type: 'image/jpg' })),
    userName: 'Irene Kredenets',
  },
  {
    id: '7LsuYqkvIUM',
    created_at: '2018-04-05T11:05:32Z',
    width: 3745,
    height: 2497,
    likes: 10,
    description: 'Robin Singing For Spring',
    tags: [],
    imgUrl: URL.createObjectURL(new File(['ruth'], 'ruth.jpg', { type: 'image/jpg' })),
    userName: 'Jan Meeus',
  },
];

export const testPicturesSearchServiceData = {
  total: 5,
  total_pages: 4,
  results: [
    {
      id: 'mJaD10XeD7w',
      created_at: '2019-06-18T21:06:08Z',
      width: 3024,
      height: 3778,
      likes: 5,
      liked_by_user: false,
      description: null,
      user: {
        id: '564bK820F9M',
        username: 'alexanderlondon',
        name: 'Alexander London',
      },
      tags: [],
      urls: {
        raw: URL.createObjectURL(new File(['mountain'], 'mountain.jpg', { type: 'image/jpg' })),
        full: URL.createObjectURL(new File(['mountain'], 'mountain.jpg', { type: 'image/jpg' })),
        regular: URL.createObjectURL(new File(['mountain'], 'mountain.jpg', { type: 'image/jpg' })),
      },
    },
  ],
};

export const testPicturesSearchData = [
  {
    id: 'mJaD10XeD7w',
    created_at: '2019-06-18T21:06:08Z',
    width: 3024,
    height: 3778,
    likes: 5,
    description: null,
    imgUrl: URL.createObjectURL(new File(['mountain'], 'mountain.jpg', { type: 'image/jpg' })),
    userName: 'Alexander London',
    tags: [],
  },
];

export const testCatPicturesSearchData = {
  total: 10,
  total_pages: 3,
  results: [
    {
      id: 'mJww10XeD7w',
      created_at: '2008-02-22T12:06:08Z',
      width: 1024,
      height: 600,
      likes: 10,
      liked_by_user: true,
      description: 'My cat Lorry',
      user: {
        id: '564bK820F9M',
        username: 'annrondon',
        name: 'Ann Rondon',
      },
      tags: [{ title: 'cat' }, { title: 'animal' }],
      urls: {
        raw: URL.createObjectURL(new File(['catLorry'], 'catLorry.jpg', { type: 'image/jpg' })),
        full: URL.createObjectURL(new File(['catLorry'], 'catLorry.jpg', { type: 'image/jpg' })),
        regular: URL.createObjectURL(new File(['catLorry'], 'catLorry.jpg', { type: 'image/jpg' })),
      },
    },
    {
      id: 'mJaD10T67Ju',
      created_at: '2000-12-01T09:11:08Z',
      width: 600,
      height: 1000,
      likes: 1002,
      liked_by_user: false,
      description: null,
      user: {
        id: '564bK820F9M',
        username: 'frog',
        name: 'Carol London',
      },
      tags: [{ title: 'cat' }],
      urls: {
        raw: URL.createObjectURL(new File(['cat'], 'cat.jpg', { type: 'image/jpg' })),
        full: URL.createObjectURL(new File(['cat'], 'cat.jpg', { type: 'image/jpg' })),
        regular: URL.createObjectURL(new File(['cat'], 'cat.jpg', { type: 'image/jpg' })),
      },
    },
  ],
};

export const testPicturesSearchErrors = {
  errors: ['The requested resource doesn’t exist'],
};
