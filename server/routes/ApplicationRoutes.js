import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ApplicationController";


router.get("/applications", list);
router.get("/applications/:id", show);
router.post("/applications", create);
router.put("/applications/:id", update);
router.delete("/applications/:id", remove);

export default router;