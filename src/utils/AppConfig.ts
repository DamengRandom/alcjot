export const AlcjotConfigs = {
  site_name: 'alcjot',
  title: `Alcohol Jot`,
  description: 'A jot for recording some alcohol I have seen ..',
  locale: 'en',
};

export const SellFormFields = ['title', 'quantity', 'paylink'];

export const initialSellFormFieldsValues = {
  title: '',
  quantity: 1,
  paylink: '',
};

export const BoozeFields = [
  'type',
  'name',
  'from',
  'volume',
  'capcity',
  'feel',
  'price',
  'image',
  'description',
];

export const initialBoozeFieldValues = {
  type: '',
  name: '',
  from: '',
  volume: '',
  capcity: '',
  feel: '',
  price: '',
  image: '',
  description: '',
};

export const APIMessage = {
  Delete_200: (id: string) => `${id} has been removed from database 🚀🚀`,
  Delete_400: 'Delete failed, please try it again later ..',
  General_Update_200: 'Updated ~~',
  General_400: (route: string) =>
    `Ooops, bad request on ${route}, please try it again ..`,
  General_401: 'Whoops, Unable to access ..',
  General_404: (route: string) => `Ah, data no found on ${route} ..`,
  General_405: (method: string) => `Method ${method} Not Allowed ..`,
};
