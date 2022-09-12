export const AppConfig = {
  site_name: 'alcjot',
  title: `Alcohol Jot`,
  description: 'A jot for recording some alcohol I have seen ..',
  locale: 'en',
};

export const APIMessage = {
  Login_200: 'Welcome back ~~',
  General_400: (route: string) =>
    `Ooops, bad request on ${route}, please try it again ..`,
  General_401: 'Whoops, Unable to access ..',
  General_404: (route: string) => `Ah, data no found on ${route} ..`,
  General_405: (method: string) => `Method ${method} Not Allowed ..`,
};
