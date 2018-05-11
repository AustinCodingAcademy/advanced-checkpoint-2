import express from "express";
import {list,show,create,update,remove} from "../Controllers/PostController";

const router = express.Router();

router.get("/posts", list);
router.get("/posts/:id", show);
router.post("/posts", create);
router.put("/posts/:id", update);
router.delete("/posts/:id", remove);

export default router;
