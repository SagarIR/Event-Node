const express = require("express");

const { createEvent } = require("../controller/eventController");
const upload = require("../utils/multer");

const router = express.Router();

router.post("/events", upload.array("images", 5), createEvent);

module.exports = router;
