const pool = require("../../pool");

exports.findOneByUserInfo = async (userEmail, userPassword) => {
  try {
    const sql = `select * from users where userEmail=? and userPassword=?`;
    const [[result]] = await pool.query(sql, [userEmail, userPassword]);

    return result;
  } catch (err) {
    throw new Error("Repository Error " + err.messsgae);
  }
};

exports.findOne = async (field, value) => {
  try {
    const sql = `select * from users where ${field}=?`;
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
    const sql = `INSERT INTO users(userId,userEmail,userPassword,userName,userBirth,userNickname) values(1,"abc@naver.com","123","a","0210929","abc")`;
    const [[result]] = await pool.query(sql, [
      userId,
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
