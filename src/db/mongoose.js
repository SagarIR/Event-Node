const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_URL ||
    "mongodb+srv://ascsagar08:uZ8hqckL9dgSk9XB@cluster0.d3xzrcs.mongodb.net/event",
  {
    useNewUrlParser: true,
  }
);
