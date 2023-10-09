const express = require("express");
const router = express.Router();
const boardRouter = require("./board/board.route");
const userRouter = require("./user/user.route");

router.get("/", (req, res) => {
  // console.log("!!!!!!");
  console.log("indexrouter : ", req.user);
  res.render("index.html", { user: req.user });
});

router.use("/boards", boardRouter);
router.use("/users", userRouter);

module.exports = router;
