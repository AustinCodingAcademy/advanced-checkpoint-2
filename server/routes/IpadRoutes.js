import express from "express";
const router = express.Router();
import {list,show,create,remove} from "../controllers/IpadsController";


router.get("/ipads", list);
router.get("/ipads/:id", show);
router.post("/ipads", create);
router.delete("/ipads/:id", remove);


export default router;
