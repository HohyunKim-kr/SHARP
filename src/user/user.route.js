const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

// auth
router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);

// create
router.get("/userCreate", userController.getUsercreate);
router.post("/userCreate", userController.postUsercreate);

// auth - logout
router.get("/logout", userController.getLogout);

// read
router.get("/getuserInfo", userController.getuserInfo);
router.get("/commentList", userController.getCommentList);

// 회원정보 유저삭제, 유저정보수정
// update
router.get("/getModifyuserinfo", userController.getModifyuserinfo);
router.post("/getModifyuserinfo", userController.postModifyuserinfo);

// delete
router.get("/deleteUser", userController.getDeleteuser);
module.exports = router;
