const { Schema, model } = require("mongoose");

const Post = new Schema({
  title: { type: String, required: true },
  body: { type: String, default: "Description", required: true },
});

module.exports = model("Post", Post);