import app from "./src/app";
import mongoose from "mongoose";
import db from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;

mongoose.connect(db);

mongoose.connection
    .on("open", () => console.log("Connected to MongoDB"))
    .on("close", () => console.log("Disconnected from MongoDB"))
    .on("error", (e: Error) => console.log(e));

app.listen(port, () => {
    console.log(`Prima API listening @ port ${port}`);
});
