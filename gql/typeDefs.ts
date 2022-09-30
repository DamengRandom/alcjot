import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Drink {
    _id: String
    time: String
    name: String
    type: String
    from: String
    volume: String
    capcity: String
    price: String
    feel: String
    description: String
    image: String
  }

  type Query {
    drink(ID: ID): Drink
    getDrinks(amount: Int): [Drink]
  }
`;
