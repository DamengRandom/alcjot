import DrinkCollection from '../model/drinkSchema';

export const resolvers = {
  Query: {
    async drink(_: any, { ID }: { ID: string }) {
      return (DrinkCollection as any).findById(ID);
    },

    async getDrinks(_: any, { amount }: { amount: number }) {
      return (DrinkCollection as any)
        .find()
        .sort({ createdAt: -1 })
        .limit(amount);
    },
  },
};
