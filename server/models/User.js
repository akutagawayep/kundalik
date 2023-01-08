const { Schema, model } = require("mongoose");

const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  homework: { type: String, required: false },
  score: { type: String, default: "Fail", required: false },
  roles: [{ type: String, ref: "Role" }],
});

module.exports = model("User", User);
