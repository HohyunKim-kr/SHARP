const userRepository = require("./user.repository");
const JWT = require("../../lib/jwt");
const jwt = new JWT();

exports.postLogin = async (userEmail, userPassword) => {
  try {
    const result = await userRepository.findOneByUserInfo(
      userEmail,
      userPassword
    );
    if (!result) return { isLogin: false, data: null };

    const token = jwt.sign({ id: result.userEmail });
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
    if (!result) return { isLogin: false, data: null };
    return { isLogin: true, data: token };
  } catch (e) {}
};

exports.findOneByUserId = async (userEmail) => {
  try {
    const result = await userRepository.findOne("userEmail", userEmail);
    return result;
  } catch (e) {
    throw new Error("servcie err", e.message);
  }
};
