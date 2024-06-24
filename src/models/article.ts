import { Schema, type InferSchemaType, model, Document } from "mongoose";

const articleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    datePublished: { type: Date, default: () => new Date() },
    isDeleted: { type: Boolean, default: false },
    tags: { type: [String], default: [] },
});

export interface ArticleDTO {
    id: string;
    title: string;
    author: string;
    content: string;
    datePublished: Date;
    tags: string[];
}

export type ArticleRequestDto = Pick<
    Article,
    "author" | "title" | "content" | "tags"
>;

export interface Article extends Document {
    title: string;
    author: string;
    content: string;
    datePublished: Date;
    isDeleted: boolean;
    tags: string[];
}

export const ArticleModel = model("Article", articleSchema);
