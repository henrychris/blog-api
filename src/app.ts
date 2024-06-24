import express, { type Request, type Response } from "express";
import * as mongoose from "mongoose";

const PORT = 3000;
const app = express();
app.use(express.json());

// mongoose setup
await mongoose.connect("mongodb://localhost:27017/basic-blog-api");
console.log("Connected to mongoose.");


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}.`);
    console.log(`URL: http://localhost:${PORT}/`);
});

await mongoose.disconnect();