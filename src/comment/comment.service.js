const commentRepository = require("./comment.repository");

exports.postCreatecomments = async (comment, userId, boardId) => {
  try {
    const result = await commentRepository.createComment(
      comment,
      userId,
      boardId
    );
    if (!result) return;
    return;
  } catch (e) {
    console.log("commentservice err" + e.message);
  }
};

exports.getDeletecomments = async (userId, comment) => {
  try {
    const result = await commentRepository.deleteComment(userId, comment);
    if (!result) return;
    return;
  } catch (e) {
    console.log("service deletecomment err", e.message);
  }
};
