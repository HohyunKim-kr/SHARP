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
    const { userEmail, userPassword } = req.body;
    const result = await userService.postLogin(userEmail, userPassword);
    console.log(result);
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

exports.postUsercreate = async (req, res, next) => {
  try {
    const {
      userId,
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname,
    } = req.body;
    const createUser = await userService.postUsercreate(
      userId,
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname
    );
    if (!createUser.isLogin) return res.redirect("/");
    res.redirect("/");
  } catch (e) {
    next();
  }
};
