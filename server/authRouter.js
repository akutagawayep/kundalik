const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware")

router.post(
  `/registration`,
  [
    check("username", "Имя пользователя не введено").notEmpty(),
    check("password", "Password should be longer than 5 symbols").isLength({
      min: 5,
    }),
  ],
  controller.registration
);
router.post(`/login`, controller.login);
router.get(`/check`, authMiddleware,  controller.check);
router.get(`/users`, controller.getUsers);

module.exports = router;
