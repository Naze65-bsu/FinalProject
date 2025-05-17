const app = require("./app");
const sequelize = require("./config/db");
require("dotenv").config();
const Post = require("./models/post");

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Database connection error:", err);
  }
})();
