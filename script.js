import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";

import { MongoInit } from "./data/index.js";
import Resolvers from "./resolvers/index.js";
import { url } from "inspector";

const dbstatus = await MongoInit();
if (!dbstatus) {
    console.error("Error connecting to MongoDB");
    process.exit();
}

const typeDefs = fs.readFileSync("./schema.graphql", "utf8");

const server = new ApolloServer({
    typeDefs,
    resolvers: Resolvers,
});

const { uri } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});

console.log(`🚗 Server started at: ${uri}`);