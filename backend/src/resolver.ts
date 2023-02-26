import { Client } from "./schemas/client";

export const resolvers = {
  Query: {
    clients: async () => {
      return await Client.find();
    },
  },
};
