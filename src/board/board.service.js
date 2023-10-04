const boardRepository = require("./board.repository");

exports.create = async () => {
  try {
    const { title, content } = data;
    const result = boardRepository.create(title, content);
    return result;
  } catch (e) {}
};
