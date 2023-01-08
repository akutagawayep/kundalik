const { Schema, model } = require("mongoose");

const Post = new Schema({
  value: { type: String, unique: true, default: "USER" },
});

module.exports = model("Post", Post);

