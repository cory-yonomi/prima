import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
} from "graphql";

export const User = new GraphQLObjectType({
    name: "User",
    fields: {
        displayName: {
            type: GraphQLString,
        },
    },
});
