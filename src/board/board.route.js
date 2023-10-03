const express = require("express");
const router = express.Router();
const boardcontroller = require("./board.controller");

// router.get("/login", controller.getLogin);
router.get("/front", boardcontroller.getFront);
router.get("/back", boardcontroller.getBack);
router.get("/blockchain", boardcontroller.getBlockchain);

router.get("/commentList", boardcontroller.getCommentList);
router.get("/mywriteList", boardcontroller.getmywriteList);
router.post("/mywriteList", boardcontroller.postmywriteList);

router.get("/myView", boardcontroller.getmyView);

module.exports = router;
