


import express from "express";
const router = express.Router();
import { list,show,create,update,remove } from "../Controllers/CountriesController";

router.get("/countries", list);
router.get("/countries/:id", show);
router.post("/countries", create);
router.put("/countries/:id", update);
router.delete("/countries/:id", remove);

export default router;


