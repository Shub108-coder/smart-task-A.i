const mongoose = require("mongoose");
const bcrypt   = require("bcrypt");

const teacherSchema = new mongoose.Schema({
  name:     { type: String, default: "Subject Teacher" },
  email:    { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role:     { type: String, default: "teacher" },
}, { timestamps: true });

teacherSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

teacherSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

module.exports = mongoose.model("Teacher", teacherSchema);
