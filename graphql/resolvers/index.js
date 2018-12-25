import { mergeResolvers } from 'merge-graphql-schemas';
import Plan from './Plan';

const resolvers = [Plan];

export default mergeResolvers(resolvers);