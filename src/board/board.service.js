const boardRepository = require("./board.repository");

exports.postWriteboard = async (title, content) => {
  try {
    const result = await boardRepository.createWriteboard(title, content);
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

exports.getmyView = async (boardId) => {
  try {
    const result = await boardRepository.findMyview(boardId);
    if (!result) return;
    // console.log(result);
    return result;
  } catch (e) {
    console.log("service getmyview err" + e.message);
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

exports.getDelete = async (boardId) => {
  try {
    const result = boardRepository.deleteBoard(boardId);
    if (!result) return;
  } catch (e) {
    console.log("service geteDelte err" + e.message);
  }
};
