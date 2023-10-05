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
