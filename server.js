const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const router = require("./src/index");
const pool = require("./pool");
const cookieParser = require("cookie-parser");
const middleware = require("./src/auth/auth.middleware");

app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
});

app.use(cookieParser());
app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => {
  console.log("server start hello");
});
