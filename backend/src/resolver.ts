import { Client } from "./schemas/client";

export const resolvers = {
  Query: {
    clients: async () => {
      const clients = await Client.find({});
      return clients;
    },
  },
};
