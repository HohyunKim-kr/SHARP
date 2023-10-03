const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);

router.get("/userCreate", userController.getUsercreate);
router.post("/userCreate", userController.postUsercreate);

router.get("/logout", userController.getLogout);

module.exports = router;
