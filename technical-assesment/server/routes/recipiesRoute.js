const express = require("express");
const router = express.Router();
const {getrecepie}= require("../controller/recipiesController.js");

router.get("/api/menuItems", getrecepie );




module.exports = router;
