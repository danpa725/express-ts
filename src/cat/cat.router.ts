import { Router } from "express";

//* service 로직 분리
import {
    createCatInfo,
    deleteCatInfo,
    getAllCataInfos,
    getSpecificCatInfo,
    patchCatInfo,
    updateCatInfo,
} from "./cat.service";

//* Router 분리
const catRouter = Router();

//* Get
catRouter.get("/cats", getAllCataInfos);
catRouter.get("/cats/:id", getSpecificCatInfo);

//* Post
catRouter.post("/cats", createCatInfo);

//* Update
catRouter.put("/cats/:id", updateCatInfo);
catRouter.patch("/cats/:id", patchCatInfo);

//* Delete
catRouter.delete("/cats/:id", deleteCatInfo);

export default catRouter;
