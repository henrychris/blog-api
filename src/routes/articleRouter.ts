import * as express from "express";
import {
    createArticle,
    getAllArticles,
    getSingleArticle,
    updateArticle,
} from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.post("/articles", createArticle);
articleRouter.get("/articles", getAllArticles);
articleRouter.get("/articles/:articleId", getSingleArticle);
articleRouter.patch("/articles/:articleId", updateArticle);

export default articleRouter;
