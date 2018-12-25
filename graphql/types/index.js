import { mergeTypes } from "merge-graphql-schemas";

import Plan from "./Plan/";

const typeDefs = [Plan];

export default mergeTypes(typeDefs, { all: true });