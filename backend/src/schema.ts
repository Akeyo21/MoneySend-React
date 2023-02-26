export const gqlSchema = `
  #graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Client {
    name: String
    phoneNumber: [String]
    amountBorrowed: Int
    interest: Int
  }

  type Query {
    clients: [Client]
  }

`;
