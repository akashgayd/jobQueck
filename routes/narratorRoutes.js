const express = require("express");
const { getNarrators, seedNarrator } = require("../controllers/narratorController");

const router = express.Router();

router.get("/", getNarrators);
router.post("/seed", seedNarrator);

module.exports = router;
