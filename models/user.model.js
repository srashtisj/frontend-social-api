const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    username: String,
    category: String, // dev/designer
    profilePic: String,
    email: String,
    social: [],
    skills: [],
    programmingSkills: [],
    experienceTimeline: [],
    eventIds: [String], // ids of event
    fbId: String,
    role: String, // <empty>/admin
    city: String,
    country: String,
    admin: Boolean,
    socialId: String,
    provider: String,
    referrals: [],
    userPreferences: {
      cookieConsent: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
