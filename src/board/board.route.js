const express = require("express");
const router = express.Router();
const boardcontroller = require("./board.controller");

// router.get("/login", controller.getLogin);
router.get("/front", boardcontroller.getFront);
router.get("/back", boardcontroller.getBack);
router.get("/blockchain", boardcontroller.getBlockchain);

router.get("/commentList", boardcontroller.getCommentList);
router.get("/mywriteList", boardcontroller.getmywriteList);
// router.get("/userCreate", boardcontroller.getuserCreate);
// router.get("/usereInfo", boardcontroller.getuserInfo);
router.get("/myView", boardcontroller.getmyView);

// router.post("/login", boardcontroller.postLogin);

module.exports = router;
