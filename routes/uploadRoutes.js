const express = require("express");
const { createProfile, getProfiles,updateProfile } = require('../controllers/profileController');
const router = express.Router();

router.post("/seed", createProfile);
router.get("/", getProfiles);

router.put('/update',updateProfile)


module.exports = router;