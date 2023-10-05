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
    const sql = `SELECT title, created_at FROM frontendBoard`;
    const [result] = await pool.query(sql);
    console.log(result);
    return result;
  } catch (e) {
    console.log("ffb err" + e.message);
  }
};
