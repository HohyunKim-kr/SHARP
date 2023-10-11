const userRepository = require("./user.repository");
const JWT = require("../../lib/jwt");
const jwt = new JWT();

exports.postLogin = async (userEmail, userPassword) => {
  try {
    const result = await userRepository.findOneByUserInfo(
      userEmail,
      userPassword
    );
    // console.log(result);
    if (!result) return { isLogin: false, data: null };

    const token = jwt.sign({ Email: result.userEmail, id: result.userId });
    return { isLogin: true, data: token };
  } catch (e) {
    throw new Error("Service Error" + e.message);
  }
};

exports.postUsercreate = async (
  userEmail,
  userPassword,
  userName,
  userBirth,
  userNickname
) => {
  try {
    const result = await userRepository.createUserInfo(
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname
    );
    if (!result) return;
    return;
  } catch (e) {
    console.log("service err" + e.message);
  }
};

exports.getCommentList = async (userId) => {
  try {
    const result = await userRepository.myCommentList(userId);
    return result;
  } catch (e) {
    console.log("getCommentList", e.message);
  }
};

exports.findOneByUserId = async (userId) => {
  try {
    const result = await userRepository.findOne("userId", userId);
    return result;
  } catch (e) {
    throw new Error("servcie err", e.message);
  }
};

exports.postModifyuserinfo = async (
  userChecked,
  userEmail,
  userPassword,
  userName,
  userBirth,
  userNickname
) => {
  try {
    const result = await userRepository.modifyUserinfo(
      userChecked,
      userEmail,
      userPassword,
      userName,
      userBirth,
      userNickname
    );
    if (!result) return;
    return;
  } catch (e) {
    console.log("service postmodify err" + e.message);
  }
};

exports.getDeleteuser = async (userId) => {
  try {
    const result = await userRepository.deleteUser(userId);
    if (!result) return;
  } catch (e) {
    console.log("service getDeleteuser err" + e.message);
  }
};
