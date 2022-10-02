import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
} from "graphql";

export const User = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {
            type: GraphQLString,
        },
        displayName: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        pwHash: {
            type: GraphQLString,
        },
        roles: {
            type: new GraphQLList(GraphQLString),
        },
    },
});
