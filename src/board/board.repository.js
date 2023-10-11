const pool = require("../../pool");

exports.createWriteboard = async (title, content, user) => {
  try {
    const sql = `INSERT INTO frontendBoard(title,content,userId) values(?,?,?)`;
    const [result] = await pool.query(sql, [title, content, user.userId]);
    return result;
  } catch (e) {
    console.log("board repo err " + e.message);
  }
};

exports.findAllcommentlist = async () => {
  try {
    const sql = `SELECT * FROM commentsList`;
    const [result] = await pool.query(sql);
    // console.log(result);
    return result;
  } catch (e) {
    console.log("ffb err" + e.message);
  }
};

exports.frontendboardList = async () => {
  try {
    const sql = `SELECT * FROM frontendBoard`;
    const [result] = await pool.query(sql);
    return result;
  } catch (e) {
    console.log("ffb err" + e.message);
  }
};

exports.findMyview = async (boardId) => {
  try {
    const sql = `SELECT boardId, title, writer, content, created_at FROM frontendBoard where boardId = ?`;
    const [[result]] = await pool.query(sql, [boardId]);
    return result;
  } catch (e) {
    console.log("repo findmyview err" + e.message);
  }
};

exports.viewIncrement = async (boardId) => {
  try {
    console.log(boardId);
    const sql = `UPDATE frontendBoard SET views=views+1 WHERE boardId = ?`;
    const [result] = await pool.query(sql, [boardId]);
    return result;
  } catch (e) {
    console.log("repo viewIncrement err", e.message);
  }
};

exports.checkedLikes = async (boardId, userId) => {
  try {
    const sql = `SELECT * FROM likes where boardId=? AND userId=?`;
    const [result] = await pool.query(sql, [boardId, userId]);
    console.log("checkedlikes", result);
    return result;
  } catch (e) {
    console.log("repo likeIncrement err", e.message);
  }
};

exports.countLike = async (boardId) => {
  try {
    const sql = `SELECT COUNT(*) FROM likes where boardId=?`;
    const [[result]] = await pool.query(sql, [boardId]);
    return result["COUNT(*)"];
  } catch (e) {
    console.log("repo likeIncrement err", e.message);
  }
};

exports.likeIncrement = async (boardId, userId) => {
  try {
    const sql = `INSERT INTO likes(boardId, userId) values(?,?)`;
    const [result] = await pool.query(sql, [boardId, userId]);
    return result;
  } catch (e) {
    console.log("repo likeIncrement err", e.message);
  }
};

exports.likeDecrement = async (boardId, userId) => {
  try {
    const sql = `DELETE FROM likes where boardId =? AND userId=?`;
    const [result] = await pool.query(sql, [boardId, userId]);
    return result;
  } catch (e) {
    console.log("repo likeDecrement err", e.message);
  }
};

// exports.findAllusernickname = async (boardId) => {
//   try {
//     const sql = `SELECT userNickname FROM users where boardId=?`;
//     const [[result]] = await pool.query(sql, [boardId]);
//     // console.log(result);
//     return result;
//   } catch (e) {
//     console.log("repo findAllusernickname err" + e.message);
//   }
// };

exports.findcommentsList = async (boardId) => {
  try {
    const sql = `SELECT commentId, userNickname, comment FROM commentsList JOIN users ON commentsList.userId = users.userId where boardId=?`;
    const [result] = await pool.query(sql, [boardId]);
    // console.log("결과!! : ", result);
    return result;
  } catch (e) {
    console.log("repo findComment err" + e.message);
  }
};

exports.userChecked = async (id, userId) => {
  try {
    // console.log(userId, id);
    const sql = `SELECT COUNT(*) FROM frontendBoard where boardId=? AND userId =?`;
    const [[result]] = await pool.query(sql, [id, userId]);
    console.log(result["COUNT(*)"]);

    return result["COUNT(*)"];
  } catch (e) {
    console.log("repo usercehcked err" + e.message);
  }
};

exports.updateBoard = async (title, content, boardId) => {
  try {
    const sql = `UPDATE frontendBoard SET title =?, content =? where boardId=?`;
    const [result] = await pool.query(sql, [title, content, boardId]);
    return result;
  } catch (e) {
    console.log("Repo update err" + e.message);
  }
};

exports.deleteBoard = async (boardId) => {
  try {
    const sql = `DELETE FROM frontendBoard where boardId =?`;
    const [result] = await pool.query(sql, [boardId]);
    console.log(result);
    return result;
  } catch (e) {
    console.log("Repo deleteBoard err " + e.message);
  }
};
