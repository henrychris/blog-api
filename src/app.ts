import express, { type Request, type Response } from "express";

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}.`);
    console.log(`URL: http://localhost:${PORT}/`);
});
