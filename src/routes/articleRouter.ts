import * as express from "express";
import { getAllArticles } from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.get("/articles", getAllArticles);

export default articleRouter;
