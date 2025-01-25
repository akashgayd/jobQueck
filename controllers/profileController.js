const Profile = require("../models/Profile");

// Create Profile
const createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Profiles
const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// update the profile

const updateProfile = async (req, res) => {

    try{
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(profile);

        if(!profile){

            return res.status(404).json({message: "Profile not found"});
        }

    }

    
    catch(err){
        res.status(400).json({message: err.message});
    }

}


module.exports = { createProfile, getProfiles , updateProfile};
