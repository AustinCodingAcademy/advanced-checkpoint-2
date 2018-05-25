import express from "express";
import { list, post, show, edit } from "../controllers/recipes";
let router = express.Router();

router.get('/recipes', list);
router.post('/recipes', post);
router.get('/recipe/:id', show);
router.put('/recipe/:id', edit);

export default router;
