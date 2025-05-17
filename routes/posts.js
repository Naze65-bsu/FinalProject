const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");
const authenticate = require("../middleware/authMiddleware");

router.post("/", authenticate, controller.createPost);
router.put("/:id", authenticate, controller.updatePost);
router.delete("/:id", authenticate, controller.deletePost);

router.get("/", controller.getAllPosts);
router.get("/:id", controller.getPost);
router.post("/", controller.createPost);
router.put("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);

module.exports = router;
