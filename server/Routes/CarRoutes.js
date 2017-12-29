import express from "express";
const router = express.Router();
import { list,show,create,update,remove } from "../Controllers/CarsController";

router.get("/cars", list);
router.get("/cars/:id", show);
router.post("/cars", create);
router.put("/cars/:id", update);
router.delete("/cars/:id", remove);

export default router;