// multerConfig.js
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalName = path.parse(file.originalname).name;
    const uniqueFilename = `${timestamp}_${originalName}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
