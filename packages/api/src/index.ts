import express, { Request, Response, Handler } from "express";

export const app = express();

import auth from "./routes/auth";

app.use(auth);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
