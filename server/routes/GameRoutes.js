import express from "express";
import {list,create, remove} from "../controllers/GameController";

const router = express.Router();

router.get("/games",list);
router.post("/games",create);
router.delete("/games/:id",remove);


export default router;
