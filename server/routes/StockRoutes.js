import { Router } from "express";
const router = Router();

import { list, show, create, update, remove } from "../controllers/StockController";

router.get("/stock", list);
router.get("/stock/:ticker", show);
router.post("/stock", create);
router.put("/stock", update);
router.delete("/stock/:ticker", remove);

export default router;
