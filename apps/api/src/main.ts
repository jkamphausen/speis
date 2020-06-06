import { API_URL, ApiResponse } from '@speis/api-interface'
import { ApolloServer, gql } from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    message: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    message: () => 'Welcome to api!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

/*
app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to api!' } as ApiResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
*/
