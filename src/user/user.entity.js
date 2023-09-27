class Users {
  userId;
  userEmail;
  userPassword;
  userName;
  userNickname;
  userGrade;
  constructor(
    userId,
    userEmail,
    userPassword,
    userName,
    userNickname,
    userGrade
  ) {
    this.userId = userId;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
    this.userName = userName;
    this.userNickname = userNickname;
    this.userGrade = userGrade;
  }
}

class UserComment {
  commentId;
  userId;
  userComments;
  created_at;
  constructor(commentId, userId, userComments, created_at) {
    this.commentId = commentId;
    this.userId = userId;
    this.userComments = userComments;
    this.created_at = created_at;
  }
}
