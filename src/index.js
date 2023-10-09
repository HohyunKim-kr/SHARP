const express = require("express");
const router = express.Router();
const boardRouter = require("./board/board.route");
const userRouter = require("./user/user.route");

router.get("/", (req, res) => {
  // console.log("!!!!!!");
  // console.log("indexrouter : ", req.user);

  const isLoggedIn = req.user !== undefined;

  // 로그인한 사용자의 정보를 템플릿에 전달
  const user = isLoggedIn ? req.user : null;

  // 템플릿을 렌더링
  res.render("index.html", { user });

  // res.render("index.html", { user: req.user });
});

router.use("/boards", boardRouter);
router.use("/users", userRouter);

module.exports = router;
