import express from "express";
const router = express.Router();
import {list,show,create,deleteRobot} from "../controllers/RobotsController";


router.get("/robots", list);
router.get("/robots/:id", show);
router.post("/robots", create);
router.delete("/robots/:id", deleteRobot);

export default router;
