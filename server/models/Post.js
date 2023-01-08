const { Schema, model } = require("mongoose");

const Post = new Schema({
  link: { type: String, required: true },
  score: { type: String, default: "Fail", required: false },
  whose: { type: String, required: true },
});

module.exports = model("Post", Post);
