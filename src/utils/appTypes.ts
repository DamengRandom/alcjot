export interface BoozeForm {
  time: Date;
  name: string;
  type: string;
  from: string;
  volume: string;
  capcity: string;
  price: string;
  feel: string;
  description: string;
  image: string;
}

export interface IPasscode {
  passcode: string;
}

export interface ISell {
  time: string;
  title: string;
  quantity: string;
  paylink: string;
}

export interface IToken {
  id: string;
  token: string;
}

export interface IHits {
  _id: string;
  name: string;
  hits: number;
  __v: number;
}
