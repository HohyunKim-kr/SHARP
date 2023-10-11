const boardRepository = require("./board.repository");

exports.postWriteboard = async (title, content, user) => {
  try {
    const result = await boardRepository.createWriteboard(title, content, user);
    if (!result) return;
    return;
  } catch (e) {
    console.log("board service err" + e.message);
  }
};

exports.getCommentList = async () => {
  try {
    const result = await boardRepository.findAllcommentlist();
    // console.log(result);
    if (!result) return;
    return result;
  } catch (e) {
    console.log("getCommentList service err" + e.message);
  }
};

exports.getFrontendboard = async () => {
  try {
    const result = await boardRepository.frontendboardList();
    if (!result) return;
    return result;
  } catch (e) {
    console.log("board service  frontboard err" + e.message);
  }
};

exports.getmyView = async (userId) => {
  try {
    const result = await boardRepository.findMyview(userId);
    if (!result) return;
    // console.log(result);
    return result;
  } catch (e) {
    console.log("service getmyview err" + e.message);
  }
};

exports.getViewincrement = async (boardId) => {
  try {
    const result = await boardRepository.viewIncrement(boardId);
    if (!result) return;
    return result;
  } catch (e) {
    console.log("service getviewinrement err", e.message);
  }
};

exports.checkedLikes = async (boardId, userId) => {
  try {
    const result = await boardRepository.checkedLikes(boardId, userId);
    // console.log("checkedLikes", result);
    if (!result) return;
    if (result.length == 0) return false;
    return result;
  } catch (e) {
    console.log("service getLikes err", e.message);
  }
};

exports.getCountlike = async (boardId) => {
  try {
    const result = await boardRepository.countLike(boardId);
    // console.log("getCountlike", result);
    if (!result) return;
    return result;
  } catch (e) {
    console.log("service getCountlike err", e.message);
  }
};

// exports.getAllusernickname = async (boardId) => {
//   try {
//     const result = await boardRepository.findAllusernickname(boardId);
//     if (!result) return;
//     return result;
//   } catch (e) {
//     console.log("service getAllusernickname err" + e.message);
//   }
// };

exports.getComments = async (boardId) => {
  try {
    const result = await boardRepository.findcommentsList(boardId);
    if (!result) return;
    return result;
  } catch (e) {
    console.log("service getComments err" + e.message);
  }
};

exports.getLike = async (boardId, userId) => {
  try {
    const result = await boardRepository.likeIncrement(boardId, userId);
    if (!result) return;
    return result;
  } catch (e) {
    console.log("service getLike", e.message);
  }
};

exports.getDeletelike = async (boardId, userId) => {
  try {
    const result = await boardRepository.likeDecrement(boardId, userId);
    if (!result) return;
    return result;
  } catch (e) {
    console.log("service getLike", e.message);
  }
};

exports.getModify = async (userId, id) => {
  try {
    const result = await boardRepository.userChecked(userId, id);
    if (!result) throw new Error();
    // console.log("userchecked" + result);
    return result;
  } catch (e) {
    throw new Error("service getmodify" + e.message);
  }
};

exports.postmodifyBoard = async (title, content, boardId) => {
  try {
    const result = await boardRepository.updateBoard(title, content, boardId);
    if (!result) return;
    // console.log(boardId);
    // console.log(result);
    return result;
  } catch (e) {
    console.log("service postmodifyboard err" + e.message);
  }
};

exports.getDelete = async (id, boardId) => {
  try {
    const isChecked = await boardRepository.userChecked(id, boardId);
    // console.log(isChecked);
    if (!isChecked) throw new Error();
    const result = await boardRepository.deleteBoard(boardId);
    if (!result) return;
  } catch (e) {
    console.log("service geteDelte err" + e.message);
  }
};
