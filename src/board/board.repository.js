const pool = require("../../pool");

exports.createWriteboard = async (title, content) => {
  try {
    console.log(title + " " + content);
    const sql = `INSERT INTO frontendBoard(title,content) values(?,?)`;
    const [result] = await pool.query(sql, [title, content]);
    return result;
  } catch (e) {
    console.log("board repo err " + e.message);
  }
};
