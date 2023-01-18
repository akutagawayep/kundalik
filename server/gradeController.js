const PostHomework = require("./models/PostHomework");
class gradeController {
  async postGrade(req, res) {
    const { whose, link, score } = req.body;
    const isExist = await PostHomework.findOne({ whose });

    if (!isExist) {
      return res.json({ message: "Не можем узнать чье дз" });
    }

    const updatedHomework = new PostHomework({
      whose,
      link,
      score,
    });

    await updatedHomework.replaceOne(isExist);
    return res.json({ message: "Оценка успешно сохранена" });
  }
}

module.exports = new gradeController();
