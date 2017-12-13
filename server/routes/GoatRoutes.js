import express from "express";
const router = express.Router();
import {list, show, create, remove} from "../controllers/GoatsControllers";

router.get("/goats", list);
router.get("/goats/:id", show);
router.post("/goats", create);
router.delete("/goats", remove);

export default router;
