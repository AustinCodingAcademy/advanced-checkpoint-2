const express = require("express");
const router = express.Router();
const controller = require("../controllers/QuestionsController");



router.get("/questions", controller.list);
router.get("/questions/:id", controller.show);
router.post("/questions", controller.create);
router.put("/questions/:id", controller.update);
router.delete("/questions/:id", controller.remove);

module.exports  = router;