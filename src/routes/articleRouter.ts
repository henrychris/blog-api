import * as express from "express";
import {
    createArticle,
    getAllArticles,
    getSingleArticle,
} from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.post("/articles", createArticle);
articleRouter.get("/articles", getAllArticles);
articleRouter.get("/articles/:articleId", getSingleArticle);

export default articleRouter;
