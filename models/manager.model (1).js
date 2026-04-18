const mongoose = require("mongoose");
const bcrypt   = require("bcrypt");

const managerSchema = new mongoose.Schema({
  name:     { type: String, default: "Faculty Mentor" },
  email:    { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role:     { type: String, default: "mentor" },
}, { timestamps: true });

managerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

managerSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

module.exports = mongoose.model("Manager", managerSchema);
