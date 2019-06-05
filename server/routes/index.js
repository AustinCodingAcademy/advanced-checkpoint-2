import { Router } from "express";
const router = Router();

router.use(require("./StockRoutes").default);

export default router;
