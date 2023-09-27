const userService = require("./user.service");

exports.getLogin = (req, res) => {
  res.render("board/login.html");
};
