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

exports.frontendboardList = async () => {
  try {
    const sql = `SELECT title, created_at, boardId FROM frontendBoard`;
    const [result] = await pool.query(sql);
    return result;
  } catch (e) {
    console.log("ffb err" + e.message);
  }
};

exports.findMyview = async (boardId) => {
  try {
    const sql = `SELECT boardId, title, writer, content, created_at, category FROM frontendBoard where boardId = ?`;
    const [[result]] = await pool.query(sql, [boardId]);
    return result;
  } catch (e) {
    console.log("repo findmyview err" + e.message);
  }
};

exports.findAllusernickname = async (userId) => {
  try {
    const sql = `SELECT userNickname FROM users where userId=?`;
    const [[result]] = await pool.query(sql, [userId]);
    console.log(result);
    return result;
  } catch (e) {
    console.log("repo findAllusernickname err" + e.message);
  }
};

exports.findcommentsList = async (boardId) => {
  try {
    const sql = `SELECT comment, userId FROM commentsList where boardId=?`;
    const [result] = await pool.query(sql, [boardId]);
    // console.log(result);
    return result;
  } catch (e) {
    console.log("repo findComment err" + e.message);
  }
};

exports.userChecked = async (userId, id) => {
  try {
    const sql = `SELECT COUNT(*) FROM frontendBoard where boardId =? AND userId=?`;
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
    return result;
  } catch (e) {
    console.log("Repo deleteBoard err " + e.message);
  }
};
