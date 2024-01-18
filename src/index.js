const express = require("express");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 8032;

const event = require("./router/event");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api", event);

app.listen(port, () => {
  console.log("Server is running on port", +port);
});
