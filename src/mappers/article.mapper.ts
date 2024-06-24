import { type Article } from "../models/article";
import { type ArticleDTO } from "../models/article";

export const toArticleDTO = (article: Article): ArticleDTO => {
    return {
        id: article._id!.toString(),
        title: article.title,
        author: article.author,
        content: article.content,
        datePublished: article.datePublished,
        tags: article.tags || [],
    };
};
