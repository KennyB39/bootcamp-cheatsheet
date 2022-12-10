const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    # Add a queryable field to retrieve an array of Class objects
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    # Add a queryable field to retrieve a single Professor object
    professor: Professor
  }

  # Define what can be queried for each professor
  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
  }
`;

module.exports = typeDefs;

// https://www.apollographql.com/docs/apollo-server/schema/schema
// https://www.apollographql.com/docs/apollo-server/schema/schema#scalar-types
// The GraphQL specification includes default scalar types 
// Int, Float, String, Boolean, and ID. 
// These primitive types cover the majority of use cases. For more specific use cases, you can create custom scalar types.
