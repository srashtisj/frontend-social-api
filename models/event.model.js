const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    dateFrom: Date,
    dateTo: Date,
    city: String,
    country: String,
    type: String, // c - conferene / m - meetup
    relatedSkills: [],
    website: String,
    twitter: String,
    youtube: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", EventSchema);