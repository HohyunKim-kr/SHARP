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

exports.getDeletecomments = async (req, res, next) => {
  try {
    const user = req.user;
    const boardId = req.query.id;

    if (user == undefined) {
      throw new Error();
    }
    const { commentId } = req.query;

    const deleteComments = await commentService.getDeletecomments(
      user.userId,
      commentId
    );
    console.log(deleteComments);
    res.redirect(`/boards/myView?id=${boardId}`);
  } catch (e) {}
};
