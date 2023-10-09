const boardService = require("./board.service");

exports.getFront = async (req, res, next) => {
  try {
    const getfrontList = await boardService.getFrontendboard();
    res.render("board/front.html", { data: getfrontList });
  } catch (e) {
    next(e);
  }
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
    const user = req.user;
    if (user == undefined) {
      throw new Error();
    }
    const { title, content } = req.body;
    const createBoard = await boardService.postWriteboard(title, content, user);
    res.redirect("/boards/front");
  } catch (e) {
    next(e);
  }
};

exports.getmyView = async (req, res, next) => {
  try {
    const boardId = req.query.id;
    const userData = req.user;
    const getmyViewpage = await boardService.getmyView(boardId);
    res.render("board/myView.html", {
      board: getmyViewpage,
      user: userData,
    });
  } catch (e) {
    next(e);
  }
};

exports.getModify = async (req, res, next) => {
  try {
    const user = req.user;
    const id = req.query.id;
    if (user == undefined) {
      throw new Error();
    }
    const getModify = await boardService.getModify(user.userId, id);
    console.log("@: ", id);
    res.render("board/modify.html", {
      id: id,
    });
  } catch (e) {
    next(e);
  }
};

exports.postModify = async (req, res, next) => {
  try {
    // const id = req.query.id;
    // console.log(id);

    const { title, content, id } = req.body;
    const modifyBoard = await boardService.postmodifyBoard(title, content, id);
    res.redirect("/boards/front");
  } catch (e) {
    next(e);
  }
};

exports.getDelete = async (req, res, next) => {
  try {
    const boardId = req.query.id;
    const deleteBoard = await boardService.getDelete(boardId);
    res.redirect("/boards/front");
  } catch (e) {
    next(e);
  }
};
