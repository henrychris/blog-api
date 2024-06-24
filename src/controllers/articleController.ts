import { type Request, type Response } from "express";
import { ArticleModel, type CreateArticleRequest } from "../models/article";
import { toArticleDTO } from "../mappers/article.mapper";

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
        res.status(500).send({ error: "Failed to create article." });
    }
};

export const getAllArticles = async (req: Request, res: Response) => {
    try {
        const articles = await ArticleModel.find();
        const articleDTOs = articles.map(toArticleDTO);

        console.log(`Fetched articles. Total count: ${articleDTOs.length}.`);
        res.status(200).send(articleDTOs);
    } catch (error) {
        console.error(`Something went wrong. Error: ${error}.`);
        res.status(500).send({ error: "Failed to fetch articles." });
    }
};

export const getSingleArticle = async (req: Request, res: Response) => {
    try {
        const articleId: string = req.params.articleId;
        if (!articleId) {
            console.error("The article id was not provided in the request.");
            res.status(422).send("The article id is required.");
            return;
        }

        const article = await ArticleModel.findById(articleId);
        if (!article) {
            console.error(`No article found for id: ${articleId}.`);
            res.status(404).send("There is no article with that id.");
            return;
        }

        console.log(`Found article for id: ${articleId}.`);
        res.status(200).send(toArticleDTO(article));
        return;
    } catch (error) {
        console.error(`Something went wrong. Error: ${error}.`);
        res.status(500).send({ error: "Failed to fetch articles." });
    }
};
