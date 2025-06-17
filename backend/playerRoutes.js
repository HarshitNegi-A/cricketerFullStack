const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/create-table", playerController.createTable);
router.post("/add-player", playerController.addPlayer);
router.get("/search-player", playerController.searchPlayer);

module.exports = router;
