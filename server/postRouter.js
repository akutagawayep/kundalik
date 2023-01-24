const Router = require("express");
const router = new Router();
const controller = require("./authController");
const postsController = require("./postController");

router.post("/post", postsController.postPost);
router.post("/send", postsController.postHomework);
router.get("/", postsController.getHomewworks);
router.get("/students", postsController.getUsersHomework);
router.put("/grading", postsController.putGrade);
router.delete("/delete", postsController.deleteUserHomeWork);
module.exports = router;
