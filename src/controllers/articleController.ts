import { type Request, type Response } from "express";
import {
    ArticleModel,
    type Article,
    type CreateArticleRequest,
} from "../models/article";

export const createArticle = async (req: Request, res: Response) => {
    try {
        const articleReq = req.body as CreateArticleRequest;
        const article = await ArticleModel.create({
            title: articleReq.title,
            author: articleReq.author,
            content: articleReq.content,
            tags: articleReq.tags,
        });

        console.log(`Created new article. Id: ${article._id}`);
        res.status(201).send(article);
    } catch (error) {
        console.error(`Something went wrong. Error: ${error}.`);
        res.status(500).send({ error: "Failed to create article" });
    }
};

export const getAllArticles = async (req: Request, res: Response) => {
    res.send("List of Articles.");
    return;
};
