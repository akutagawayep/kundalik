const Router = require("express");
const router = new Router();
const controller = require("./authController");
const postsController = require("./postController");

router.post("send", postsController.postHomework);
router.get("/", postsController.getHomewworks);

module.exports = router;
