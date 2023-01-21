const PostHomework = require("./models/PostHomework");
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
      // const candidate = await User.findOne({ whose });
      // if (!) {
      //   return res.status(400).json({
      //     message:
      //       "Пользователь с таким именем  не существует, введите такой же ник какой у вас в профиле",
      //   });
      // }

      const homewrok = new PostHomework({
        link: link,
        whose: whose,
        homework: homework
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
      const userhomeworks = await PostHomework.find();
      res.json(userhomeworks);
    } catch (e) {
      console.log(e);
      res.json({ message: "Error message no:", e });
    }
  }
  async putGrade(req, res) {
    try {
      const { whose, score, link, homework } = req.body;
      const homewrok = await PostHomework.findOne({ whose, link });

      const updated = {
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
}

module.exports = new postsController();
