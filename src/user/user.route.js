const express = require("express");
const router = express.Router();
const controller = require("./user.controller");

router.get("/login", controller.getLogin);
// router.get("/logout", userController.getLogout);
// router.post("/login", userController.posLogin);

module.exports = router;
