import express, { Request, Response } from "express";

export const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
