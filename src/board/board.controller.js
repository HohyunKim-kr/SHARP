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

exports.getWriteboard = (req, res) => {
  res.render("board/Writeboard.html");
};

exports.postWriteboard = (req, res) => {
  res.render("board/front.html");
};

exports.getmyView = (req, res) => {
  res.render("board/myView.html");
};
