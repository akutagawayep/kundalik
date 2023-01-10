const Router = require("express");
const router = new Router();
const controller = require("./authController");
const postsController = require("./postController");
const checkRoleMiddleware = require("./middleware/checkRoleMiddleware");

router.post("/post", checkRoleMiddleware("ADMIN"), postsController.postPost);
router.post("/send", postsController.postHomework);
router.get("/", postsController.getHomewworks);

module.exports = router;
