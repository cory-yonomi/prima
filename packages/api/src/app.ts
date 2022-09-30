import express, { Request, Response, Handler } from "express";

const app = express();

import auth from "./routes/auth";

app.use(express.json());
app.use(auth);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello!");
});

export default app;
