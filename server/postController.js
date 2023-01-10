const Post = require("./models/Post");
const User = require("./models/User");

class postsController {
  async postHomework(req, res) {
    try {
      const { link, whose } = req.body;
      const candidate = await User.findOne({ whose });
      if (candidate) {
        return res.status(400).json({
          message:
            "Пользователь с таким именем уже не существует, введите такой же ник какой у вас в профиле",
        });
      }

      const homewrok = new Post({
        link,
        whose,
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
}


module.exports = new postsController();
