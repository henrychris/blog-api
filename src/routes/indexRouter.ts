import * as express from "express";
import { getIndex } from "../controllers/indexController";

const indexRouter = express.Router();

indexRouter.get("/", getIndex);

export default indexRouter;