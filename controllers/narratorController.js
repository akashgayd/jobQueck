const Narrator = require("../models/Narrator");


const getNarrators = async (req, res) => {
    const {search,category,jobType,rateMin,rateMax, page = 1, limit = 10} = req.query;


    // Build the query object
    const query = {};

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } }, 
            { role: { $regex: search, $options: "i" } },  
            { location: { $regex: search, $options: "i" } } 
        ];
    }

    if (category) {
        query.category = category;
    }

    if (jobType) {
        query.jobType = jobType;
    }

    if (rateMin || rateMax) {
        const rateFilter = {};
        if (rateMin) rateFilter.$gte = parseFloat(rateMin);
        if (rateMax) rateFilter.$lte = parseFloat(rateMax);
        query.rate = rateFilter;
    }

    try {
        // Apply pagination
        const narrators = await Narrator.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Narrator.countDocuments(query);

        res.json({
            narrators,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Seed a sample narrator
const seedNarrator = async (req, res) => {
    const sampleNarrator = {
        title: "Audiobook Narrator",
        role: "Employer",
        rate: 60, // Use a numeric value for rate for easier filtering
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
