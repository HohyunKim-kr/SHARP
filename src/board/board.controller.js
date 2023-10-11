const boardService = require("./board.service");

exports.getFront = async (req, res, next) => {
  try {
    const userData = req.user;
    const getmyViewpage = await boardService.getCommentList();
    // console.log(getmyViewpage);
    const getfrontList = await boardService.getFrontendboard();
    // console.log(getfrontList);
    // 좋아요 갯수 반환
    // const countLike = await boardService.getCountlike(boardId);
    res.render("board/front.html", {
      data: getfrontList,
      userData: userData,
      comment: getmyViewpage,
    });
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
    // if (req.user == undefined) {
    //   res.render("board/myView.html");
    // }
    const boardId = req.query.id;
    const userData = req.user;
    const getmyViewpage = await boardService.getmyView(boardId);
    const viewIncrement = await boardService.getViewincrement(boardId);

    let likes;
    // 좋아요 클릭시 그에 맞는 board,id 를 찾는 구문 반환되면 좋아요
    if (userData != undefined) {
      likes = await boardService.checkedLikes(boardId, userData.userId);
      console.log(likes);
    }

    // 좋아요 갯수 반환
    const countLike = await boardService.getCountlike(boardId);
    // const likeIncrement = await boardService.getLikeincrement(boardId);
    console.log("!: ", countLike);
    const getCommentsList = await boardService.getComments(boardId);
    res.render("board/myView.html", {
      comments: getCommentsList,
      board: getmyViewpage,
      user: userData,
      countLike: countLike,
      like: likes ? likes : false,
      // allNick: allUsernickname,
    });
  } catch (e) {
    next(e);
  }
};

exports.getLike = async (req, res, next) => {
  try {
    const boardId = req.query.id;
    const user = req.user;
    const getLike = await boardService.getLike(boardId, user.userId);
    res.redirect(`/boards/myView?id=${boardId}`);
  } catch (e) {
    next(e);
  }
};

exports.getDeletelike = async (req, res, next) => {
  try {
    const boardId = req.query.id;
    const user = req.user;
    const getDeletelike = await boardService.getDeletelike(
      boardId,
      user.userId
    );
    res.redirect(`/boards/myView?id=${boardId}`);
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
    const user = req.user;
    if (user == undefined) {
      throw new Error();
    }
    const boardId = req.query.id;
    console.log(boardId);
    console.log(user.userId);
    const deleteBoard = await boardService.getDelete(boardId, user.userId);
    res.redirect("/boards/front");
  } catch (e) {
    next(e);
  }
};
