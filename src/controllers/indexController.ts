import { type Request, type Response } from "express";

export const getIndex = async (req: Request, res: Response) => {
    res.send("Hello World!");
    return;
};
