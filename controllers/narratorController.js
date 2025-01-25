const Narrator = require("../models/Narrator");

// Fetch all narrators
const getNarrators = async (req, res) => {
    try {
        const narrators = await Narrator.find();
        res.json(narrators);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Seed a sample narrator
const seedNarrator = async (req, res) => {
    const sampleNarrator = {
        title: "Audiobook Narrator",
        role: "Employer",
        rate: "$60 / hour",
        category: "Music & Audio",
        jobType: "Freelance",
        location: "New York",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    };

    try {
        const narrator = new Narrator(sampleNarrator);
        await narrator.save();
        res.status(201).json({ message: "Sample narrator created", narrator });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getNarrators, seedNarrator };
