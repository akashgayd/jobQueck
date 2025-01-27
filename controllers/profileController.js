const Profile = require("../models/Profile")




const updateProfile = async (req, res) => {

    const myProfile  = { name: "Lina Jamasin",
    title: "Designer UI | UX",
    description: "Passionate UI/UX designer dedicated to crafting intuitive digital experiences.",
    personalInfo: {
      age: "34 years",
      email: "lina.jamasin@gmail.com",
      address: "New York, US",
      phone: "414-234-3457",
    },
    skills: ["Prototyping", "Wireframing", "UX", "UI", "Typography"],
    workExperience: [
      {
        title: "Lead UI/UX Designer",
        company: "PixelCraft Innovations",
        location: "New York City, NY",
        duration: "2018 - Present",
        description:
          "Spearheaded the design team at PixelCraft Innovations, creating captivating UI/UX experiences.",
      },
      {
        title: "Senior UI/UX Designer",
        company: "TechVista Solutions",
        location: "San Francisco, CA",
        duration: "2015 - 2018",
        description:
          "Led the UI/UX design initiatives at TechVista Solutions, crafting intuitive software interfaces.",
      },
    ],
    lastActivities: [
      { activity: "Uploaded a new project titled 'ElegantEats'", timeAgo: "2m ago" },
      { activity: "Received 20 likes on the project", timeAgo: "2m ago" },
    ],
}
  ;



    try {

         const newProfile = new Profile(myProfile);
        
      const updatedProfile = await newProfile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
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
