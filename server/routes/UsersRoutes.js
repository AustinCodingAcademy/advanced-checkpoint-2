const express = require("express");
const router = express.Router();
const {list,show,create,remove,update} = require( "../controllers/UsersController");



router.get("/users", list);
router.get("/user/:id", show);
router.post("/user", create);
router.put("/user/:id", update);
router.delete("/user/:id", remove);

module.exports = router;
