const pool = require("../../pool");

const latestId = async (board_id) => {
  try {
    const [[id]] = await pool.query(sql, [board_id]);

    return id;
  } catch (e) {
    throw new Error("Repository Error " + e.messsgae);
  }
};

exports.create = (title, content) => {
  const id = latestId(req.id);
  const board = new Board(id, title, writer, content);
  data.push(board);

  return board;
};
