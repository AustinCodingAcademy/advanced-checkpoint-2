import express from "express";
import {list,create,remove} from "../controllers/UserController";
const router = express.Router();

router.get("/users", list)
router.post("/users", create)
router.delete("/users/:id", remove);

export default router;
