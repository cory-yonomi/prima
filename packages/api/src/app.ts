import express, { Request, Response, Handler } from "express";
import { ApolloServer, gql } from "apollo-server";
import { schema } from "./schema/schema";

const app = express();

import auth from "./routes/auth";
import { GraphQLSchema } from "graphql";

app.use(express.json());
app.use(auth);

const server = new ApolloServer({
    schema: schema,
    csrfPrevention: true,
    cache: "bounded",
});

app.post("/graphql", (req: Request, res: Response) => {
    res.send("Hello!");
});

export default app;
