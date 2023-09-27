class Board {
  userId;
  category;
  id;
  title;
  writer;
  content;
  created_at;
  hit;
  constructor(userId, category, id, title, writer, content, created_at, hit) {
    this.userId = userId;
    this.category = category;
    this.id = id;
    this.title = title;
    this.writer = writer;
    this.content = content;
    this.created_at = created_at;
    this.hit = hit;
  }
}
