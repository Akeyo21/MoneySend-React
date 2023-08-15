import { ApolloServer } from "@apollo/server";
import mongoose from "mongoose";
import { startStandaloneServer } from "@apollo/server/standalone";

import { gqlSchema } from "./schema";
import { resolvers } from "./resolver";

const connectToDb = async () => {
  const DATABASE_URL = "mongodb://localhost:27017/money_send_dev";
  await mongoose.connect(DATABASE_URL);
};

const startBackend = async () => {
  await connectToDb();
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs: gqlSchema,
    resolvers,
  });

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startBackend()
  .then(() => console.log("CONNECTED TO THE DB"))
  .catch((e) => console.log("ERROR WHEN CONNECTING TO THE DB", e));

console.log("HELLO  ");
