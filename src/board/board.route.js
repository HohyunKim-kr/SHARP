const express = require("express");
const router = express.Router();
const boardcontroller = require("./board.controller");

// front route
router.get("/front", boardcontroller.getFront);
router.get("/back", boardcontroller.getBack);
router.get("/blockchain", boardcontroller.getBlockchain);

// create
router.get("/writeBoard", boardcontroller.getWriteboard);
router.post("/writeBoard", boardcontroller.postWriteboard);

// read
router.get("/commentList", boardcontroller.getCommentList);
router.get("/myView", boardcontroller.getmyView);

router.get("/like", boardcontroller.getLike);
router.get("/deleteLike", boardcontroller.getDeletelike);
// update
router.get("/modify", boardcontroller.getModify);
router.post("/modify", boardcontroller.postModify);

// delete
router.get("/delete", boardcontroller.getDelete);

module.exports = router;
