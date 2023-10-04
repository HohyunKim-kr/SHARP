const boardRepository = require("./board.repository");

exports.postmywriteList = async (title, content) => {
  try {
    const mywriteList = await userService.postmywriteList(title, content);
  } catch (e) {}
};
