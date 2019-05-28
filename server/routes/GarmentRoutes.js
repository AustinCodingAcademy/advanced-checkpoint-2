import express from "express";
import {list, create, remove} from "../controllers/GarmentController";
const router = express.Router();

router.get("/garments", list);
router.post("/garments", create);
router.delete("/garments/:id", remove);

export default router; 