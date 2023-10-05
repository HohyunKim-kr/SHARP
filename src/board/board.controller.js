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
  res.render("board/writeBoard.html");
};

exports.postWriteboard = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const createBoard = await boardService.postWriteboard(title, content);
  } catch (e) {
    next();
  }
  res.render("board/front.html");
};

exports.getmyView = (req, res) => {
  res.render("board/myView.html");
};
