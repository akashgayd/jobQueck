const Profile = require("../models/Profile")




const updateProfile = async (req, res) => {
    try {
      const updatedProfile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
      res.json(updatedProfile);
    } catch (error) {
      res.status(500).json({ error: 'Error updating profile.' });
    }
  };
  
  
  const getProfiles=(async (req, res) => {
    try {
      const profile = await Profile.findOne({});
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching profile.' });
    }
  });


module.exports = {  getProfiles , updateProfile};
