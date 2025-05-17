const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const postRoutes = require("./routes/posts");

const app = express();
app.use(cors());
app.use(express.json());

// Rate Limiter: 100 requests per 2 mins
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Routes
app.use("/posts", postRoutes);

module.exports = app;
