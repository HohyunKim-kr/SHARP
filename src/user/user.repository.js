const pool = require("../../pool");

exports.findOneByUserInfo = async (user_Email, user_Password) => {
  try {
    // const sql = `select * from users`;
    const sql = "SELECT * FROM users where userEmail=? AND userPassword=?";
    // const sql = `SELECT userEmail,userPassword FROM users`;
    // const [[result]] = await pool.query(sql);
    const [[result]] = await pool.query(sql, [user_Email, user_Password]);
    console.log(result + "finone");

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
  userEmail,
  userPassword,
  userName,
  userBirth,
  userNickname
) => {
  try {
    const sql = `INSERT INTO users(userEmail,userPassword,userName,userBirth,userNickname) values(?,?,?,?,?)`;
    const [result] = await pool.query(sql, [
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname,
    ]);
    return result;
  } catch (e) {
    console.log("user repo err", e.message);
  }
};

exports.myCommentList = async (userId) => {
  try {
    const sql = `SELECT comment,userId,boardId FROM commentsList where userId=?`;
    const [result] = await pool.query(sql, [userId]);
    // console.log(result);
    return result;
  } catch (e) {
    console.log("usermycommentlist err", e.message);
  }
};

exports.modifyUserinfo = async (
  userChecked,
  userEmail,
  userPassword,
  userName,
  userBirth,
  userNickname
) => {
  try {
    if (!userChecked) throw new Error("Notoken");
    const sql = `UPDATE users SET userEmail=?,userPassword=?,userName=?,userBirth=?,userNickname=? where userId=?`;
    const [result] = await pool.query(sql, [
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname,
      userChecked.userId,
    ]);
    return result;
  } catch (e) {
    console.log("user repo modifyuser err", e.message);
  }
};

exports.deleteUser = async (userId) => {
  try {
    const sql = `DELETE FROM users where userId=?`;
    const [result] = await pool.query(sql, [userId]);
    console.log(result + "deleteUser");
    return result;
  } catch (e) {
    console.log("Repo deleteUser err " + e.message);
  }
};
