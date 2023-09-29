const userRepository = require("./user.repository");
const JWT = require("../../lib/jwt");
const jwt = new JWT();

exports.postLogin = async (user_id, user_pw) => {
  try {
    const result = await userRepository.findOnByUserInfo(user_id, user_pw);
    if (!result) return { isLogin: false, data: null };

    const token = jwt.createSignature({ id: result.userid });
    return { isLogin: true, data: token };
  } catch (e) {
    throw new Error("Service Error" + e.message);
  }
};

exports.findOneByUserId = async (userid) => {
  try {
    const result = await userRepository.findOne("userid", userid);
    return result;
  } catch (e) {
    throw new Error("servcie err", e.message);
  }
};
