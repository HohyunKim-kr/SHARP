const boardService = require("./board.service");

exports.getFront = async (req, res) => {
  const getfrontList = await boardService.getFrontendboard();
  res.render("board/front.html", { data: getfrontList });
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
    res.redirect("/boards/front");
  } catch (e) {
    next();
  }
};

exports.getmyView = async (req, res) => {
  const boardId = req.query.id;
  const userData = req.user;
  console.log(boardId);
  const getmyViewpage = await boardService.getmyView(boardId);
  res.render("board/myView.html", {
    board: getmyViewpage,
    user: userData,
  });
};

exports.getModify = (req, res) => {
  res.render("board/modify.html");
};

exports.postModify = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const modifyBoard = await boardService.postmodifyBoard(title, content);
    res.redirect("/boards/myView");
  } catch (e) {
    next();
  }
};
