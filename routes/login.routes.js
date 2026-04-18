const express = require("express");
const route   = express.Router();
const bcrypt  = require("bcrypt");

const Manager = require("../models/manager.model (1)");
const User    = require("../models/user.model");
const Teacher = require("../models/teacher.model");

// ─────────────────────────────────────────
// GET /Login
// ─────────────────────────────────────────
route.get("/Login", (req, res) => {
  if (req.session && req.session.userId) {
    return redirectByRole(res, req.session.role);
  }
  res.render("login", { error: null });
});

// ─────────────────────────────────────────
// POST /Login
// ─────────────────────────────────────────
route.post("/Login", async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.render("login", { error: "Email and password are required." });
  }

  try {
    const teacher = await Teacher.findOne({ email: email.toLowerCase() });
    if (teacher) {
      const match = await teacher.comparePassword(password);
      if (!match) return res.render("login", { error: "Invalid email or password." });
      req.session.userId = teacher._id;
      req.session.role   = "teacher";
      req.session.name   = teacher.name;
      return res.redirect("/teacher/dashboard");
    }

    const manager = await Manager.findOne({ email: email.toLowerCase() });
    if (manager) {
      const match = await manager.comparePassword(password);
      if (!match) return res.render("login", { error: "Invalid email or password." });
      req.session.userId = manager._id;
      req.session.role   = "mentor";
      req.session.name   = manager.name;
      return res.redirect("/mentor/dashboard");
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      const match = await user.comparePassword(password);
      if (!match) return res.render("login", { error: "Invalid email or password." });
      req.session.userId = user._id;
      req.session.role   = "member";
      req.session.name   = user.name;
      return res.redirect("/member/dashboard");
    }

    return res.render("login", { error: "No account found with that email." });

  } catch (err) {
    console.error("Login error:", err);
    return res.render("alert", {
      type:    "error",
      title:   "Login failed",
      message: "Something went wrong on our end. Please try again.",
      buttons: [{ label: "Try again", href: "/Login", class: "btn-danger" }]
    });
  }
});

// ─────────────────────────────────────────
// GET /logout
// ─────────────────────────────────────────
route.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.render("alert", {
      type:    "info",
      title:   "Logged out",
      message: "You have been signed out successfully.",
      buttons: [{ label: "Sign in again", href: "/Login", class: "btn-primary" }]
    });
  });
});

// ─────────────────────────────────────────
// GET /seed  — run once, then delete
// ─────────────────────────────────────────
route.get("/seed", async (req, res) => {
  try {
    await Manager.deleteMany({});
    await Teacher.deleteMany({});

    await Manager.create({
      name:     "Faculty Mentor",
      email:    process.env.MANAGER_EMAIL,
      password: process.env.MANAGER_PASSWORD,
    });

    await Teacher.create({
      name:     "Subject Teacher",
      email:    process.env.TEACHER_EMAIL    || "teacher@test.com",
      password: process.env.TEACHER_PASSWORD || "teacher123",
    });

    // ← plain res.send, no alert.ejs needed
    res.send(`
      <h2 style="font-family:sans-serif;padding:2rem;">✅ Seeded!</h2>
      <p style="font-family:sans-serif;padding:0 2rem;">Mentor: <b>${process.env.MANAGER_EMAIL}</b></p>
      <p style="font-family:sans-serif;padding:0 2rem;">Teacher: <b>${process.env.TEACHER_EMAIL || "teacher@test.com"}</b></p>
      <br>
      <a href="/Login" style="font-family:sans-serif;padding:0 2rem;">→ Go to Login</a>
    `);

  } catch (err) {
    res.send("Seed error: " + err.message);
  }
});
// Helper
function redirectByRole(res, role) {
  const map = {
    mentor:  "/mentor/dashboard",
    teacher: "/teacher/dashboard",
    member:  "/member/dashboard"
  };
  res.redirect(map[role] || "/Login");
}

module.exports = route;