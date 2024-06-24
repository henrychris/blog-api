import * as express from "express";
import {
    createArticle,
    getAllArticles,
} from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.post("/articles", createArticle);
articleRouter.get("/articles", getAllArticles);

export default articleRouter;
