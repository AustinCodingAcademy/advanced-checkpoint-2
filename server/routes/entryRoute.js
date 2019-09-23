import express from "express";
import { list, show, create, update, remove } from "../controllers/entryController";
import entryModel from "../models/entry";

const router = express.Router();

router.get("/entries", list);
router.get("/entry/:id", show);
router.post("/entries", create);
router.delete(`/entry/:id`, remove);
router.put("/entry/:id", update);

export default router;
