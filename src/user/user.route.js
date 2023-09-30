const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.get("/login", userController.getLogin);
router.get("/logout", userController.getLogout);
router.get("/userCreate", userController.getUsercreate);

router.post("/login", userController.postLogin);
router.post("/userCreate", userController.postUsercreate);

// router.post("/userCreate", userController.postUsercreate);

module.exports = router;
