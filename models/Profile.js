const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    profileImage: { type: String }, // Store image URL
    skills: { type: [String] },
    workExperience: [
        {
            role: String,
            company: String,
            location: String,
            startYear: Number,
            endYear: Number,
            description: String,
        },
    ],
    education: [
        {
            degree: String,
            institution: String,
            yearOfPassing: Number,
        },
    ],
    lastActivities: [
        {
            activity: String,
            timestamp: Date,
        },
    ],
});

module.exports = mongoose.model("Profile", profileSchema);
