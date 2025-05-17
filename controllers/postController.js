const Post = require("../models/post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.json(post);
};

exports.createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  await post.update(req.body);
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  await post.destroy();
  res.status(204).send();
};
