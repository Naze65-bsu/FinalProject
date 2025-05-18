const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");
const authenticate = require("../middleware/authMiddleware");

router.post("/", authenticate, controller.createPost);
router.put("/:id", authenticate, controller.updatePost);
router.delete("/:id", authenticate, controller.deletePost);

router.get("/", authenticate, controller.getAllPosts);
router.get("/:id", authenticate, controller.getPost);

module.exports = router;
