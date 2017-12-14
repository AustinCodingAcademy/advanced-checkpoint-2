import express from "express";
import { list, show, create, update, remove } from "../controllers/GameController";

const router = express.Router();

router.get("/games", list);
router.get("/games/:id", show);
router.post("/games", create);
router.put("/games/:id", update);
router.delete("/games/:id", remove);

export default router;
