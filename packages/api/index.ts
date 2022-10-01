import app from "./src/app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Prima API listening @ port ${port}`);
});
