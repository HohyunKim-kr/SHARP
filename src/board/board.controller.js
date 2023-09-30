const boardService = require("./board.service");

exports.getFront = (req, res) => {
  res.render("board/front.html");
};

exports.getBack = (req, res) => {
  res.render("board/back.html");
};

exports.getBlockchain = (req, res) => {
  res.render("board/blockchain.html");
};

exports.getCommentList = (req, res) => {
  res.render("board/commentList.html");
};

exports.getmywriteList = (req, res) => {
  res.render("board/mywriteList.html");
};

// exports.getuserCreate = (req, res) => {
//   res.render("board/userCreate.html");
// };

// exports.getuserInfo = (req, res) => {
//   res.render("board/getuserInfo.html");
// };

exports.getmyView = (req, res) => {
  res.render("board/myView.html");
};
