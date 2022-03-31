const { ApolloServer } = require('apollo-server');
const { gql } = require('graphql-tag');
const Post = require('./models/Post');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODOB } = require('./config.js');

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGODOB, { useNewUrlParser: true })
  .then(() => {
    console.log('---------LINE 15-----------');
    return server.listen({ port: 5000 });
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  });
