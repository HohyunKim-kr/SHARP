exports.getLogin = (req, res) => {
  res.render("board/login.html");
};
exports.postLogin = (req, res) => {
  res.render("board/myView.html");
};

exports.getCommentList = (req, res) => {
  res.render("board/commentList.html");
};

exports.getmywriteList = (req, res) => {
  res.render("board/mywriteList.html");
};

exports.getuserCreate = (req, res) => {
  res.render("board/userCreate.html");
};

exports.getuserInfo = (req, res) => {
  res.render("board/getuserInfo.html");
};

exports.getmyView = (req, res) => {
  res.render("board/myView.html");
};

exports.postmyView = (req, res) => {
  res.render("board/myView.html");
};
