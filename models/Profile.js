const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    title: String,
    description: String,
    personalInfo: {
      age: String,
      email: String,
      address: String,
      phone: String
    },
    skills: [String],
    workExperience: [
      {
        title: String,
        company: String,
        location: String,
        duration: String,
        description: String
      }
    ],
    lastActivities: [
      {
        activity: String,
        timeAgo: String
      }
    ]
  });
  
  const Profile = mongoose.model('Profile', profileSchema);
  

module.export = Profile;
