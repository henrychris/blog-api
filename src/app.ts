import * as mongoose from "mongoose";
import express, { type Request, type Response } from "express";
import indexRouter from "./routes/indexRouter";
import articleRouter from "./routes/articleRouter";

const PORT = process.env.PORT || 3000;
const apiPrefix = "/api";

const app = express();
app.use(express.json());
app.use(indexRouter);
app.use(apiPrefix, articleRouter);

// mongoose setup
mongoose
    .connect("mongodb://localhost:27017/basic-blog-api")
    .then(() => console.log("Connected to mongoose."))
    .catch((err) => console.error("Could not connect to mongoose", err));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}.`);
    console.log(`URL: http://localhost:${PORT}/`);
});

// Disconnect mongoose when the process is terminated
process.on("SIGINT", async () => {
    await mongoose.disconnect();
    console.log("Disconnected from mongoose.");
    process.exit(0);
});
