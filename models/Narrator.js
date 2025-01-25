const mongoose = require("mongoose");

const narratorSchema = new mongoose.Schema({
    title: { type: String, 
        
        required: true
     },
    role: { type: String, 
        required: true
     },
    rate: { type: String,
         required: true
         },
    category: { type: String,
        
        required: true },
    jobType: { type: String,
         required: true
         },
    location: { type: String,
         required: true 
        },
    imageUrl: { type: String,
         required: true 
        },
});

module.exports = mongoose.model("Narrator", narratorSchema);
