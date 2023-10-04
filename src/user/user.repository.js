const pool = require("../../pool");

exports.findOneByUserInfo = async (user_Email, user_Password) => {
  try {
    // const sql = `select * from users`;
    const sql = "SELECT * FROM users where userEmail=? AND userPassword=?";
    // const sql = `SELECT userEmail,userPassword FROM users`;
    // const [[result]] = await pool.query(sql);
    const [[result]] = await pool.query(sql, [user_Email, user_Password]);
    console.log(user_Email, user_Password);
    console.log(result);

    return result;
  } catch (err) {
    throw new Error("Repository Error " + err.messsgae);
  }
};

exports.findOne = async (field, value) => {
  try {
    const sql = `SELECT * FROM users WHERE ${field}=?`;
    const [[result]] = await pool.query(sql, [value]);
    return result;
  } catch (e) {
    throw new Error("Repo err", err.messgae);
  }
};

exports.createUserInfo = async (
  userId,
  userEmail,
  userPassword,
  userName,
  userBirth,
  userNickname
) => {
  try {
    const sql = `INSERT INTO users(userId,userEmail,userPassword,userName,userBirth,userNickname) values(?,?,?,?,?,?)`;
    const [[result]] = await pool.query(sql, [
      (userId = 2),
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname,
    ]);
    console.log(result);
    return result;
  } catch (e) {
    console.log("user repo err", e.message);
  }
};
