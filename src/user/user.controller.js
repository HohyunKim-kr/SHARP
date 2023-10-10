const userService = require("./user.service");

exports.getLogin = (req, res) => {
  res.render("board/login.html");
};

exports.postLogin = async (req, res, next) => {
  try {
    const { userEmail, userPassword } = req.body;
    // const userEmail = req.body.userEmail;
    // const userPassword = req.body.userPassword;

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
    next(e);
  }
};

exports.getUsercreate = (req, res) => {
  res.render("board/userCreate.html");
};

exports.postUsercreate = async (req, res, next) => {
  try {
    const { userEmail, userPassword, userName, userBirth, userNickname } =
      req.body;
    const createUser = await userService.postUsercreate(
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname
    );
    res.redirect("/");
  } catch (e) {
    next();
  }
};

exports.getLogout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

exports.getuserInfo = (req, res) => {
  res.render("board/getuserInfo.html", { user: req.user });
};

exports.getCommentList = async (req, res, next) => {
  try {
    const user = req.user;
    const getCommentList = await userService.getCommentList(user.userId);
    console.log(getCommentList);
    res.render("board/commentList.html", {
      user: req.user,
      comment: getCommentList,
    });
  } catch (e) {
    next(e);
  }
};

exports.getModifyuserinfo = (req, res) => {
  res.render("board/getModifyuserinfo.html", { user: req.user });
};

exports.postModifyuserinfo = async (req, res, next) => {
  try {
    const userChecked = req.user ? req.user : undefined;
    const { userEmail, userPassword, userName, userBirth, userNickname } =
      req.body;
    const createUser = await userService.postModifyuserinfo(
      userChecked,
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname
    );
    res.redirect("/");
  } catch (e) {
    next(e);
  }
};

// delete
exports.getDeleteuser = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const deleteUser = await userService.getDeleteuser(userId);
    this.getLogout(req, res);
  } catch (e) {
    next(e);
  }
};
