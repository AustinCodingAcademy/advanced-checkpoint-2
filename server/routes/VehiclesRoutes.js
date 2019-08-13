import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/VehiclesController";


router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.delete("/vehicles/:id", remove);
router.put("/vehicles/:id", update);

export default router;
