import express from "express";
import { upload, show } from "../controllers/uploads";
let router = express.Router();

router.post('/uploads', upload);
router.get('/uploads/:image', show);

export default router;
