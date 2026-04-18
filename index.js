const express = require("express");
const app = express();
const connectDB = require("./db/DbConnect");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

connectDB();

const login = require("./routes/login.routes");

app.set("view engine", "ejs");

app.use("/", login);

module.exports = app;