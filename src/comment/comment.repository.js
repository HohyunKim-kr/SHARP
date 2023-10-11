const pool = require("../../pool");

exports.createComment = async (comment, userId, boardId) => {
  try {
    const sql = `INSERT INTO commentsList(comment, userId, boardId) VALUES(?,?,?)`;
    const [result] = await pool.query(sql, [comment, userId, boardId]);
    // console.log(result);
    return result;
  } catch (e) {
    console.log("comment repo err " + e.message);
  }
};

exports.deleteComment = async (userId, comment) => {
  try {
    const sql = `DELETE FROM commentsList where userId=? AND commentId=?`;
    const [result] = await pool.query(sql, [userId, comment]);
    console.log(result);
    return result;
  } catch (e) {
    console.log("repo commentdelte err", e.message);
  }
};
