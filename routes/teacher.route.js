const express = require("express");
const route   = express.Router();

route.get("/TeacherDashboard", (req, res) => {
  if (req.session && req.session.userId) {
    return redirectByRole(res, req.session.role);
  }
  res.render("dashboardteacher");
});

module.exports = route;