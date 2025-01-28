const mongoose = require("mongoose");

const narratorSchema = new mongoose.Schema({
    designation: { type: String, 
        
        required: true
     },
    emptype: { type: String, 
        required: true
     },
    experience: { type: String,
         required: true
         },
    category: { type: String,
        
        required: true },
    package: { type: String,
         required: true
         },
    location: { type: String,
         required: true 
        },
        companyName:{
            type:String,
            require:true
        },
    imageUrl: { type: String,
         required: true 
        },
});

module.exports = mongoose.model("Narrator", narratorSchema);
