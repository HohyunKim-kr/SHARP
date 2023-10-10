const pool = require("../../pool");

exports.createComment = async (comment, userId, boardId) => {
  try {
    const sql = `INSERT INTO commentsList(comment, userId, boardId) VALUES(?,?,?)`;
    const [result] = await pool.query(sql, [comment, userId, boardId]);
    console.log(result);
    return result;
  } catch (e) {
    console.log("comment repo err " + e.message);
  }
};
