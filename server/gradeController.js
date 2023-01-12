const gradingHomework = async (req, res) => {
  const { whose, link } = req.body;
  const isExist = await User.findOne({ whose });

  if (isExist) {
    return res.json({ message: "Не корректно указанно чье дз" });
  }
};
