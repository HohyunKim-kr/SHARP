const express = require("express");
const router = express.Router();
const commentController = require("./comment.controller");

// comments create
router.post("/myView", commentController.postCreatecomments);

// comments read
// router.get("/myView", commentController.getViewcomments);

// comments modify
// router.post("/myView", commentController.postModifycomments);

// comments delete
// router.get("/deleteComments", commentController.getDeletecomments);

module.exports = router;
