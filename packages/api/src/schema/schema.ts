import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

import { Tenant } from "./tenant.schema";
import { User } from "./user.schema";

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => {
                return "Hello world!";
            },
        },
        fetchTenant: {
            type: Tenant,
            resolve: () => {},
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTenant: {
            type: Tenant,
            resolve: () => {},
        },
        tenantLogIn: {
            type: Tenant,
            resolve: () => {},
        },
        updateTenant: {
            type: Tenant,
            resolve: () => {},
        },
        removeTenant: {
            type: Tenant,
            resolve: () => {},
        },
        createUser: {
            type: User,
            resolve: () => {},
        },
        userLogIn: {
            type: User,
            resolve: () => {},
        },
    },
});

export const schema = new GraphQLSchema({ query: Query });
