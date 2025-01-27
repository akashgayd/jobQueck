const express = require("express");
const { getProfiles,updateProfile } = require('../controllers/profileController');
const router = express.Router();

router.post("/get",getProfiles);
router.get("/update", updateProfile);




module.exports = router;