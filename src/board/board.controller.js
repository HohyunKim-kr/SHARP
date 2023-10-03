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

exports.postmywriteList = async (req, res) => {
  try {
    const { userId, category, id, title, writer, content, created_at, hit } =
      req.body;
    const mywriteList = await boardService.postmywriteList(
      userId,
      category,
      id,
      title,
      writer,
      content,
      created_at,
      hit
    );
  } catch (e) {}
};

exports.getmyView = (req, res) => {
  res.render("board/myView.html");
};
