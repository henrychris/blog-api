import * as express from "express";
import {
    createArticle,
    getAllArticles,
    getSingleArticle,
    updateArticle,
    deleteArticle,
} from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.post("/articles", createArticle);
articleRouter.get("/articles", getAllArticles);
articleRouter.get("/articles/:articleId", getSingleArticle);
articleRouter.patch("/articles/:articleId", updateArticle);
articleRouter.delete("/articles/:articleId", deleteArticle);

export default articleRouter;
