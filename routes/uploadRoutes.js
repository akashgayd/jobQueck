const express = require("express");
const { createProfile, getProfiles } = require('../controllers/profileController');
const router = express.Router();

router.post("/seed", createProfile);
router.get("/", getProfiles);

module.exports = router;