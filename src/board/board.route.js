const express = require("express");
const router = express.Router();
const controller = require("./board.controller");

router.get("/login", controller.getLogin);
router.get("/commentList", controller.getCommentList);
router.get("/mywriteList", controller.getmywriteList);
router.get("/userCreate", controller.getuserCreate);
router.get("/usereInfo", controller.getuserInfo);
router.get("/myView", controller.myView);

router.post("/login", controller.postLogin);
module.exports = router;
