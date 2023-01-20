const { Schema, model } = require("mongoose");

const PostHomework = new Schema({
  link: { type: String, required: true, ref: "Post" },
  score: { type: String, default: "Fail", required: false },
  whose: { type: String, required: true, unique: true },
  homework: { type: String, required: true, unique: false },
});

module.exports = model("PostHomework", PostHomework);
