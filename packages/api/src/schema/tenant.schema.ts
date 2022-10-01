import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
} from "graphql";

import { User } from "./user.schema";

export const Tenant = new GraphQLObjectType({
    name: "Tenant",
    fields: {
        pubKey: { type: new GraphQLNonNull(GraphQLString) },
        displayName: { type: new GraphQLNonNull(GraphQLString) },
        administrator: { type: new GraphQLNonNull(User) },
    },
});
