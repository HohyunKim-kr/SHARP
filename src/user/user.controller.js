const userService = require("./user.service");

exports.getLogin = (req, res) => {
  res.render("board/login.html");
};

exports.getLogout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

exports.getUsercreate = (req, res) => {
  res.render("board/userCreate.html");
};

exports.postLogin = async (req, res, next) => {
  try {
    const { user_id, user_pw } = req.body;
    const result = await userService.postLogin(user_id, user_pw);
    if (!result.isLogin) return res.redirect("/");

    res.cookie(
      "token",
      result.data,
      (maxAge = 60 * 10),
      (domain = "127.0.0.1"),
      (path = "/")
    );
    res.redirect("/");
  } catch (e) {
    next();
  }
};
