import { type Request, type Response } from "express";

export const getAllArticles = async (req: Request, res: Response) => {
    res.send("List of Articles.");
    return;
};
