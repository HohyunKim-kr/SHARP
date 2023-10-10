const commentService = require("./comment.service");

exports.postCreatecomments = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const boardId = req.query.id;
    if (userId == undefined) {
      throw new Error();
    }
    const { comment } = req.body;
    const postCreatecomments = await commentService.postCreatecomments(
      comment,
      userId,
      boardId
    );
    res.redirect(`/boards/myView?id=${boardId}`);
  } catch (e) {
    next(e);
  }
};
