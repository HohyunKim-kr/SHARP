const pool = require("../../pool");

exports.createWriteboard = async (title, content) => {
  try {
    const sql = `INSERT INTO frontendBoard(title,content) values(?,?)`;
    const [result] = await pool.query(sql, [title, content]);
    return result;
  } catch (e) {
    console.log("board repo err " + e.message);
  }
};

exports.frontendboardList = async () => {
  try {
    const sql = `SELECT title, created_at, boardId FROM frontendBoard`;
    const [result] = await pool.query(sql);
    console.log(result);
    return result;
  } catch (e) {
    console.log("ffb err" + e.message);
  }
};

exports.findMyview = async (boardId) => {
  try {
    const sql = `SELECT title, writer, content, created_at, category FROM frontendBoard where boardId = ?`;
    const [[result]] = await pool.query(sql, [boardId]);
    console.log(result);
    return result;
  } catch (e) {
    console.log("repo findmyview err" + e.message);
  }
};

exports.updateBoard = async (title, content, boardId) => {
  try {
    const sql = `UPDATE title, content from frontendBoard where boardId=?`;
    result[[result]] = await pool.query(sql, [title, content, boardId]);
    console.log(result);
    return result;
  } catch (e) {
    console.log("Repo update err" + e.message);
  }
};
