const PostHomework1 = require("./models/PostHomework");
const User = require("./models/User");
const Post = require("./models/Post");

class postsController {
  async postPost(req, res) {
    try {
      const { title, body } = req.body;
      const post = new Post({
        title,
        body,
      });

      await post.save();
      return res.json({ message: "Пост успешно опубликован" });
    } catch (e) {
      console.log(e);
    }
  }

  async postHomework(req, res) {
    try {
      const { link, whose, homework } = req.body;

      const data = await PostHomework1.find();
      const newID = data[data.length - 1].id + 1;
      const homewrok = new PostHomework1({
        id: newID,
        link: link,
        whose: whose,
        homework: homework,
      });

      await homewrok.save();
      return res.json({ message: "Домашка  успешно отправленна" });
    } catch (e) {
      console.log(e);
    }
  }

  async getHomewworks(req, res) {
    try {
      const homewroks = await Post.find();
      res.json(homewroks);
    } catch (e) {
      console.log(e);
      res.json({ message: "Error message no:", e });
    }
  }
  async getUsersHomework(req, res) {
    try {
      const userhomeworks = await PostHomework1.find();
      res.json(userhomeworks);
    } catch (e) {
      console.log(e);
      res.json({ message: "Error message no:", e });
    }
  }
  async putGrade(req, res) {
    try {
      const { whose, score, link, homework, id } = req.body;
      const homewrok = await PostHomework1.findOne({ id });

      const updated = {
        id,
        whose,
        score,
        link,
        homework,
      };
      await homewrok.replaceOne(updated);
      res.json({ message: "Оценка сохранена" });
    } catch (e) {
      console.log(e);
      res.json({ message: "Error message no:", e });
    }
  }
  async deleteUserHomeWork(req, res) {
    const { id } = req.body;
    const homewrok = await PostHomework1.findOne({ id });

    await PostHomework1.deleteOne({ id });
    return res.json({ message: "Удалено" });
  }
}

module.exports = new postsController();
