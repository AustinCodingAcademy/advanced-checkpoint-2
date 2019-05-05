import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/MovieController";

router.get("/movies", list);
router.get("/movies/:id", show);
router.post("/movies", create);
router.put("/movies/:id", update);
router.delete("/movies/:id", remove);

export default router;
