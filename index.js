const express = require("express");
const app = express();
const connectDB = require("./db/DbConnect");

connectDB();
const login = require("./routes/login.routes");
app.set("view engine", "ejs");

app.use("/", login);

module.exports = app;