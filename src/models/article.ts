import { Schema, type InferSchemaType, model } from "mongoose";

const articleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    datePublished: { type: Date, default: Date.UTC },
    isDeleted: Boolean,
    tags: [String],
});

export type Article = InferSchemaType<typeof articleSchema>;
export const ArticleModel = model("Article", articleSchema);
