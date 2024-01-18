const Event = require("../model/event");

const createEvent = async (req, res) => {
  try {
    const {
      eventName,
      eventTitle,
      eventDescription,
      eventLocation,
      eventDate,
    } = req.body;

    const images = req.files.map((file) => file.filename);

    const newEvent = new Event({
      eventName,
      eventTitle,
      eventDescription,
      eventLocation,
      eventDate,
      images,
    });

    await newEvent.save();
    res.json({ message: "You have created event successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createEvent };
