const express = require("express");
const {getJobdetails,seedJobdetails} = require('../controllers/jobDecreption');
  

const router = express.Router();

router.get("/", getJobdetails);

router.post("/seed", seedJobdetails);

module.exports = router;