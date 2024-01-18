const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventTitle: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventLocation: { type: String, required: true },
  eventDate: { type: Date, required: true },
  images: [String],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
