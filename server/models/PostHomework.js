const { Schema, model } = require("mongoose");
const PostHomework = new Schema({
  link: { type: String, required: true, ref: "Post" },
  score: { type: String, default: "Не оценено", required: false },
  whose: { type: String, required: true, unique: false },
  homework: { type: String, required: false, unique: false },
});

module.exports = model("PostHomework", PostHomework);
