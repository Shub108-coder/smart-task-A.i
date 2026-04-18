const express = require("express");
const route   = express.Router();


route.get("/managerdashboard", (req, res) => {
  if (req.session && req.session.userId) {
    return redirectByRole(res, req.session.role);
  }
  res.render("dashboard");
});

module.exports = route;