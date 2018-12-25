export default `
  type Plan {
    id: String!
    title: String!
    scheduled: Boolean!
    dateCreated: String!
  }

  type Query {
    plan(id: String!): Plan
    plans: [Plan!]!
  }

  type Mutation {
    createPlan(title: String!): Plan! 
    editPlan(id: String, title: String, scheduled: Boolean): Plan
    deletePlan(id: String!): Plan
  }
`;
