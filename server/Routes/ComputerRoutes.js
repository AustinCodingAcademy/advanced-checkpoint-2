import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ComputersController";



router.get("/computers", list);
router.get("/computers/:id", show);
router.post("/computers", create);
router.put("/computers/:id", update);
router.delete("/computers/:id", remove);

export default router;