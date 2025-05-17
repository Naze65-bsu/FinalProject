const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Sir! Server is working!");
});

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 100,
  message: {
    status: 429,
    error: "Too many requests. Please try again after 2 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/posts", limiter);

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

module.exports = app;
