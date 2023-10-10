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

exports.getModify = async (userId, id) => {
  try {
    const result = await boardRepository.userChecked(userId, id);
    if (!result) throw new Error();
    console.log("userchecked" + result);
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

exports.getDelete = async (boardId, id) => {
  try {
    const isChecked = await boardRepository.userChecked(boardId, id);
    console.log(isChecked);
    if (!isChecked) throw new Error();
    const result = await boardRepository.deleteBoard(boardId);
    if (!result) return;
  } catch (e) {
    console.log("service geteDelte err" + e.message);
  }
};
