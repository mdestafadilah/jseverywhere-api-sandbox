const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar DateTime
  type Mutation {
    newNote(content: String!): Note
  }
`;
