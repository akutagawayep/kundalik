const { Schema, model } = require("mongoose");

const PostHomework = new Schema({
  link: { type: String, required: true, ref: "Post", unique: true },
  score: { type: String, default: "Fail", required: false },
  whose: { type: String, required: true, unique: true },
});

module.exports = model("PostHomework", PostHomework);
