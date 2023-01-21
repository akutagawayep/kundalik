const { Schema, model } = require("mongoose");
const PostHomework1 = new Schema({
  
  id: {type: Number, required: true, unique: true },
  link: { type: String, required: true, ref: "Post", unique: false },
  score: { type: String, default: "Не оценено", required: false },
  whose: { type: String, required: true, unique: false },
  homework: { type: String, required: false, unique: false },
});

module.exports = model("PostHomework1", PostHomework1);
