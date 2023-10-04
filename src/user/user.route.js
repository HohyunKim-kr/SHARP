const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);

router.get("/userCreate", userController.getUsercreate);
router.post("/userCreate", userController.postUsercreate);

router.get("/logout", userController.getLogout);

router.get("/getuserInfo", userController.getuserInfo);

// 회원정보 유저삭제, 유저정보수정
// router.get("/deleteuser",userController.getDeleteuser);
// router.post("/modifyUserinfo",userController.postModifyuserinfo);

module.exports = router;
