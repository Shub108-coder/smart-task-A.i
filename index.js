const express = require("express");
const session = require("express-session");
const app     = express();
const connectDB = require("./db/DbConnect");
const path    = require("path");

require("dotenv").config();

connectDB();

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret:process.env.SESSION_SECRET || "smarttask-secret-key",
  resave:false,
  saveUninitialized:false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.set("view engine", "ejs");

const login = require("./routes/login.routes");
const teacherroute = require("./routes/teacher.route");
const dashboard = require("./routes/manager.route");

app.use("/", login);
app.use("/", teacherroute);
app.use("/", dashboard);

module.exports = app;