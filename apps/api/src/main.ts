import { Food } from '@speis/api-interface'
import { ApolloServer, gql } from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    message: String
    foods: [Food]
  }

  type Food {
    name: String
    amount: Int
    location: String
  }

  type FoodList {
    foods: [Food]
  }
`;

const DATA: Food[] = [
  { name: 'Banán', amount: '3', location: 'Unten' },
  { name: 'Pilze', amount: '1', location: 'Oben' },
  { name: 'Gehackte Tonaten', amount: '2', location: 'Unten' },
  { name: 'Ravioli', amount: '4', location: 'Oben' },
];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    message: () => 'Welcome to api!',
    foods: () => DATA
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

